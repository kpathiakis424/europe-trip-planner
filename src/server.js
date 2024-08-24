const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const axios = require('axios');
const config = require('./config');
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const app = express();
const port = 3009;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
  ssl: {
    rejectUnauthorized: false
  }
});

// Initialize Google AI with the API key from config
const genAI = new GoogleGenerativeAI(config.GOOGLE_MAPS_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

app.get('/api/starred-attractions', async (req, res) => {
  const { day } = req.query;
  try {
    const client = await pool.connect();
    let result;
    if (day) {
      result = await client.query('SELECT * FROM starred_attractions WHERE day = $1', [day]);
    } else {
      result = await client.query('SELECT * FROM starred_attractions');
    }
    const results = { 'results': (result) ? result.rows : null};
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error " + err);
  }
});

app.post('/api/starred-attractions', async (req, res) => {
  const { attractionId, day } = req.body;
  try {
    const client = await pool.connect();
    await client.query('INSERT INTO starred_attractions (attraction_id, day) VALUES ($1, $2)', [attractionId, day]);
    res.status(201).send("Attraction starred successfully");
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error " + err);
  }
});

app.delete('/api/starred-attractions', async (req, res) => {
  const { attractionId, day } = req.query;
  try {
    const client = await pool.connect();
    await client.query('DELETE FROM starred_attractions WHERE attraction_id = $1 AND day = $2', [attractionId, day]);
    res.status(200).send("Attraction unstarred successfully");
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error " + err);
  }
});

app.post('/api/create-tour', async (req, res) => {
  const { attractions, day } = req.body;

  const prompt = `Create an optimized one-day tour itinerary for Day ${day} with the following attractions:
  ${attractions.map((a, index) => `${index + 1}. ${a.name} (ID: ${a.id})`).join('\n')}
  
  Requirements:
  1. Order the attractions in the most efficient way to visit them all in one day.
  2. Suggest a reasonable amount of time to spend at each attraction.
  3. Include a summary of the tour.
  4. Provide tips for the tour.
  5. Include the day number in the response.
  
  Please format the response as a JSON object with this structure:
  {
    "day": ${day},
    "tour": [
      {
        "id": "attraction_id",
        "name": "Attraction Name",
        "order": 1,
        "suggestedDuration": "2 hours" // Example duration
      },
      // ... more attractions in the optimal order
    ],
    "summary": "Generated tour summary here",
    "tips": "Generated tour tips here"
  }
  
  Provide only the JSON object in your response, without any additional text or formatting.`;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response.text();

    const jsonMatch = responseText.match(/\{[\s\S]*\}/); 
    if (!jsonMatch) {
      throw new Error("No valid JSON found in the response from Google Gemini");
    }
    
    const tourData = JSON.parse(jsonMatch[0]);
    res.json(tourData); 

  } catch (error) {
    console.error('Error creating tour:', error);
    res.status(500).json({ message: 'Error creating tour', error: error.toString() }); 
  }
});

// New endpoint for Google Directions API
app.post('/api/directions', async (req, res) => {
    const { origin, destination, modes } = req.body;
    const GOOGLE_DIRECTIONS_API_URL = 'https://maps.googleapis.com/maps/api/directions/json';
  
    try {
      const routePromises = modes.map(mode => 
        axios.get(GOOGLE_DIRECTIONS_API_URL, {
          params: {
            origin,
            destination,
            mode,
            key: config.GOOGLE_MAPS_API_KEY,
          },
        })
      );
  
      const responses = await Promise.all(routePromises);
      
      const routes = responses.map((response, index) => {
        const route = response.data.routes[0];
        const leg = route.legs[0];
        return {
          mode: modes[index],
          duration: leg.duration.value,
          distance: leg.distance.value,
          geometry: route.overview_polyline.points
        };
      });
  
      res.json(routes);
    } catch (error) {
      console.error('Error fetching directions:', error);
      res.status(500).json({ error: 'Failed to fetch directions' });
    }
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});