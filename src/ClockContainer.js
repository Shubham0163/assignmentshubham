// ClocksContainer.js
import React, { useState } from 'react';
import Clock from './Clock';

const ClocksContainer = () => {
  const [selectedTimezones, setSelectedTimezones] = useState(['Europe/London', '', '']);

  const handleTimezoneChange = (index, value) => {
    const newTimezones = [...selectedTimezones];
    newTimezones[index] = value;
    setSelectedTimezones(newTimezones);
  };

  return (
    <div className="clocks-container">
      <div className="clock">
        <h3>UK Time (Europe/London)</h3>
        <Clock timezone="Europe/London" />
      </div>
      <div className="clock">
        <h3>Timezone 1</h3>
        <select value={selectedTimezones[1]} onChange={(e) => handleTimezoneChange(1, e.target.value)}>
          <option value="">Select Timezone</option>
          <option value="America/New_York">America/New_York</option>
          {/* Add more timezones as needed */}
        </select>
        {selectedTimezones[1] && <Clock timezone={selectedTimezones[1]} />}
      </div>
      <div className="clock">
        <h3>Timezone 2</h3>
        <select value={selectedTimezones[2]} onChange={(e) => handleTimezoneChange(2, e.target.value)}>
          <option value="">Select Timezone</option>
          <option value="Asia/Tokyo">Asia/Tokyo</option>
          {/* Add more timezones as needed */}
        </select>
        {selectedTimezones[2] && <Clock timezone={selectedTimezones[2]} />}
      </div>
    </div>
  );
};

export default ClocksContainer;
