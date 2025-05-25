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

        {/* 🚀 CTA to Skool Trifecta with UTM tracking */}
        <a
          href={heroSection.cta.link}
          className="hero-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {heroSection.cta.text}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
