// src/sections/Footer/FooterSection.jsx

import React from 'react';
import './FooterSection.css';
import { footerSection } from '../../content/content.js';

const platformLinks = {
  Instagram: 'https://www.instagram.com/acsresultsai',
  Twitter: 'https://twitter.com/acsresultsai',
  YouTube: 'https://youtube.com/@acsresultsai',
  Contact: 'mailto:alex@acsresultsai.net',
};

const FooterSection = () => {
  return (
    <footer className="footer">
      {/* 🧭 Brand Tagline */}
      <p className="footer-tagline">{footerSection.tagline}</p>

      {/* 🔗 Social & Contact Links */}
      <ul className="footer-links">
        {footerSection.links.map((link) => (
          <li key={link}>
            <a
              href={platformLinks[link] || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* 🔁 Loopback CTA */}
      <p className="footer-loopback">
        <a
          href={footerSection.loopbackCTA.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerSection.loopbackCTA.text}
        </a>
      </p>

      {/* 🧠 Closing Note */}
      <p className="footer-note">{footerSection.note}</p>
    </footer>
  );
};

export default FooterSection;
