import React from 'react';
import TripPlanner from './TripPlanner';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  return (
    <div className="App dark-theme">
      <div className="glass-container">
        <TripPlanner />
      </div>
    </div>
  );
}

export default App;