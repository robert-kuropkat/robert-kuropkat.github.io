import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';

import Home    from './Home';
import About   from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
       <nav>
       <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
       </nav>
       <img src={logo} className="App-logo" alt="logo" /> 

       <Routes>
         <Route path="/"         element={<Home    />} />
         <Route path="/contact"  element={<Contact />} />
         <Route path="/about"    element={<About   />} />
       </Routes>
       </header>
      </div>
    </Router>

  );
}

export default App;
