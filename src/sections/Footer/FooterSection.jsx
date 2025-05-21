// src/sections/Footer/FooterSection.jsx

import React from 'react';
import './FooterSection.css';
import { footerSection } from '../../content/content.js';


const FooterSection = () => {
  return (
    <footer className="footer">
      <p className="footer-tagline">{footerSection.tagline}</p>
      <ul className="footer-links">
        {footerSection.links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <p className="footer-note">{footerSection.note}</p>
    </footer>
  );
};

export default FooterSection;
