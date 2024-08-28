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

// Logging function
const logApiCall = (method, url, params = {}) => {
  console.log(`API Call: ${method} ${url}`);
  if (Object.keys(params).length > 0) {
    console.log('Parameters:', params);
  }
};

app.get('/api/starred-attractions', async (req, res) => {
  logApiCall('GET', '/api/starred-attractions', req.query);
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
  logApiCall('POST', '/api/starred-attractions', req.body);
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
  logApiCall('DELETE', '/api/starred-attractions', req.query);
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
  logApiCall('POST', '/api/create-tour', req.body);
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

app.post('/api/directions', async (req, res) => {
  logApiCall('POST', '/api/directions', req.body);
  const { origin, destination, modes } = req.body;
  const GOOGLE_DIRECTIONS_API_URL = 'https://maps.googleapis.com/maps/api/directions/json';

  try {
    const routePromises = modes.map(mode => {
      const url = `${GOOGLE_DIRECTIONS_API_URL}?origin=${origin}&destination=${destination}&mode=${mode}&key=${config.GOOGLE_MAPS_API_KEY}`;
      logApiCall('GET', url);
      return axios.get(url);
    });

    const responses = await Promise.all(routePromises);
    
    const routes = responses.map((response, index) => {
      const route = response.data.routes[0];
      const leg = route.legs[0];
      return {
        mode: modes[index],
        duration: leg.duration.value,
        distance: leg.distance.value,
        steps: leg.steps,
        polyline: route.overview_polyline.points
      };
    });

    res.json(routes);
  } catch (error) {
    console.error('Error fetching directions:', error);
    res.status(500).json({ error: 'Failed to fetch directions' });
  }
});

app.post('/api/save-tour', async (req, res) => {
  logApiCall('POST', '/api/save-tour', req.body);
  const { day, city, tourData } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO saved_tours (day, city, tour_data) VALUES ($1, $2, $3) RETURNING id',
      [day, city, JSON.stringify(tourData)]
    );
    res.status(201).json({ id: result.rows[0].id, message: "Tour saved successfully" });
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving tour: " + err);
  }
});

app.get('/api/saved-tours', async (req, res) => {
  logApiCall('GET', '/api/saved-tours', req.query);
  const { day } = req.query;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM saved_tours WHERE day = $1 ORDER BY created_at DESC',
      [day]
    );
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving saved tours: " + err);
  }
});

app.get('/api/transport-options', async (req, res) => {
  logApiCall('GET', '/api/transport-options', req.query);
  const { origin, destination, departure_time } = req.query;
  const API_KEY = config.GOOGLE_MAPS_API_KEY; // Using the API key from config

  if (!origin || !destination || !departure_time) {
    return res.status(400).json({ error: 'Origin, destination, and departure_time are required' });
  }

  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=transit&departure_time=${departure_time}&key=${API_KEY}`;
  logApiCall('GET', url);

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching transport options:', error);
    res.status(500).json({ error: 'Failed to fetch transport options', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});