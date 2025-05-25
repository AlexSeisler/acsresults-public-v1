import React from 'react';
import './OurSystemsSection.css';
import { ourSystemsSection } from '../../content/content.js';

const OurSystemsSection = () => {
  const systems = [
    {
      key: 'smmaa',
      title: ourSystemsSection.smmaa.title,
      desc: ourSystemsSection.smmaa.desc,
      ctaText: ourSystemsSection.smmaa.cta.text,
      ctaLink: ourSystemsSection.smmaa.cta.link,
    },
    {
      key: 'cian',
      title: ourSystemsSection.cian.title,
      desc: ourSystemsSection.cian.desc,
      ctaText: ourSystemsSection.cian.cta.text,
      ctaLink: ourSystemsSection.cian.cta.link,
    },
    {
      key: 'tools',
      title: ourSystemsSection.tools.title,
      desc: ourSystemsSection.tools.desc,
      ctaText: ourSystemsSection.tools.cta.text,
      ctaLink: ourSystemsSection.tools.cta.link,
    },
  ];

  return (
    <section className="our-systems-section" id="our-systems">
      <div className="our-systems-content">
        <h2 className="systems-header">{ourSystemsSection.header}</h2>
        <p className="systems-tagline">{ourSystemsSection.tagline}</p>

        <div className="systems-card-grid">
          {systems.map((system, index) => (
            <a
              href={system.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="system-card-link"
              key={system.key}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="system-card">
                <div className="card-glow" />
                <div className="card-inner">
                  <h3 className="card-title">{system.title}</h3>
                  <p className="card-description">{system.desc}</p>
                  <span className="system-cta">{system.ctaText}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSystemsSection;
