// src/sections/Hero/HeroSection.jsx

import React from 'react';
import './HeroSection.css';
import { heroSection } from '../../content/content.js';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      {/* 🌌 Animated System Background */}
      <div className="hero-ambient" />

      {/* 🧠 Content Container */}
      <div className="hero-content">
        <h1 className="hero-headline">{heroSection.headline}</h1>
        <p className="hero-subheading">{heroSection.subheading}</p>
        <a href="#our-systems" className="hero-cta">
          {heroSection.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
