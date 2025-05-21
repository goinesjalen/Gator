// App.js - Main component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Attire from './components/Attire';
import DayOf from './components/DayOf';
import Congratulations from './components/Congratulations';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attire" element={<Attire />} />
          <Route path="/day-of" element={<DayOf />} />
          <Route path="/congratulations" element={<Congratulations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;