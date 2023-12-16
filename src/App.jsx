import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar  from './Navbar';

function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Services />} path='/services' />
          <Route path='*' element={<Navigate to="/" />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
