// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Table from './Table';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes */}
        <Route path="/" element={<Table />} /> {/* Use element prop */}
      </Routes>
    </Router>
  );
}

export default App;
