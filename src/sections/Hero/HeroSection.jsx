// src/sections/Hero/HeroSection.jsx

import React from 'react';
import './HeroSection.css';
import { heroSection } from '../../content/content.js';


const HeroSection = () => {
  return (
    <section className="hero" id="here">
      {/* 🎯 Strategy: Position Clearly */}
      <h1 className="hero-headline">{heroSection.headline}</h1>
      <p className="hero-subheading">{heroSection.subheading}</p>
      <button className="hero-cta">{heroSection.cta}</button>
    </section>
  );
};

export default HeroSection;
