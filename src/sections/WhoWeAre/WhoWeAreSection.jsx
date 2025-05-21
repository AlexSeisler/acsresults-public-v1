// src/sections/WhoWeAre/WhoWeAreSection.jsx

import React from 'react';
import './WhoWeAreSection.css';
import { whoWeAreSection } from '../../content/content.js';

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are" id="who-we-are">
      {/* 🎯 Strategy: Earn Trust Visually */}
      <h2 className="section-header">{whoWeAreSection.header}</h2>
      <p className="section-body">
        {whoWeAreSection.body.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </section>
  );
};

export default WhoWeAreSection;
