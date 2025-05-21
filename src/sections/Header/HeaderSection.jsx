// src/sections/Header/HeaderSection.jsx

import React from 'react';
import './HeaderSection.css';


const HeaderSection = () => {
  return (
    <header className="site-header">
      <nav className="top-nav">
        <span className="logo">ACS Results</span>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#who-we-are">Who We Are</a></li>
          <li><a href="#our-systems">Systems</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
