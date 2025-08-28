import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./firebase"; 
import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/userlist" element={<UserList />} /> 
      </Routes>
    </Router>
  );
}

export default App;