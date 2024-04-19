import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import Location from './components/Location';
import Navbar from './components/NavBar';
import './App.css'; // Assuming you have global styles in this file

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
