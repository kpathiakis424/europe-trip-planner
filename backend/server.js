const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.get('/api/trip-details', (req, res) => {
  // This is where you'd fetch and return trip details
  res.json({ message: 'Trip details will be fetched here' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});