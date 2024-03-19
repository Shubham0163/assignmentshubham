import React, { useState } from 'react';
import Clock from './Clock';
import './App.css';

const App = () => {
  const [selectedTimezones, setSelectedTimezones] = useState([
    'Europe/London', // UK timezone
    'America/New_York', // Default additional timezone
    'Asia/Tokyo' // Default additional timezone
  ]);

  return (
    <div className="app">
      {selectedTimezones.map((timezone, index) => (
        <Clock key={index} timezone={timezone} />
      ))}
    </div>
  );
};

export default App;
