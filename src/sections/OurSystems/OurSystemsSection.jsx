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
    <section className="our-systems" id="our-systems">
      {/* 🎯 Strategy: Showcase the Trifecta Clearly */}
      <h2 className="systems-header">{ourSystemsSection.header}</h2>
      <div className="systems-grid">
        {systems.map((system) => (
          <div className="system-card" key={system.key}>
            <h3>{system.title}</h3>
            <p>{system.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSystemsSection;
