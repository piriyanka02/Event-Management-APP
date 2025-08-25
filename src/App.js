import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./firebase"; 
import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;