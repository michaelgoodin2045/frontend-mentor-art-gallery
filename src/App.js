import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Location from './Components/Location';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
