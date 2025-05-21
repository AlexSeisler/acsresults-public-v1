// src/components/HeroSection.jsx

import React from 'react';
import '../styles/HeroSection.css';
import { heroSection } from '../copy/copy.js';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* 🎯 Strategy: Position Clearly */}
      <h1 className="hero-headline">{heroSection.headline}</h1>
      <p className="hero-subheading">{heroSection.subheading}</p>
      <button className="hero-cta">{heroSection.cta}</button>
    </section>
  );
};

export default HeroSection;
