// src/sections/OurSystems/OurSystemsSection.jsx

import React from 'react';
import './OurSystemsSection.css';
import { ourSystemsSection } from '../../content/content.js';

const OurSystemsSection = () => {
  const systems = [
    {
      key: 'smmaa',
      title: ourSystemsSection.smmaa.title,
      desc: ourSystemsSection.smmaa.desc,
    },
    {
      key: 'cian',
      title: ourSystemsSection.cian.title,
      desc: ourSystemsSection.cian.desc,
    },
    {
      key: 'tools',
      title: ourSystemsSection.tools.title,
      desc: ourSystemsSection.tools.desc,
    },
  ];

  return (
    <section className="our-systems-section" id="our-systems">
      <div className="our-systems-content">
        <h2 className="systems-header">{ourSystemsSection.header}</h2>

        <div className="systems-card-grid">
          {systems.map((system, index) => (
            <div className="system-card" key={system.key} style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="card-glow" />
              <div className="card-inner">
                <h3 className="card-title">{system.title}</h3>
                <p className="card-description">{system.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSystemsSection;
