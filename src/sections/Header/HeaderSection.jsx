// src/sections/Header/HeaderSection.jsx

import React, { useState, useEffect } from 'react';
import './HeaderSection.css';

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-ambient" />
      
      <nav className="top-nav" role="navigation" aria-label="Main Navigation">
        {/* 🔰 Logo */}
        <div className="logo">
          <img src="/Logo.png" alt="ACS Results Logo" />
          <span className="logo-text">ACS Results</span>
        </div>

        {/* 📱 Mobile Nav */}
        <div className="menu-wrapper">
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={toggleMenu}
          >
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="main-menu">
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="#who-we-are" onClick={closeMenu}>Who We Are</a></li>
            <li><a href="#our-systems" onClick={closeMenu}>Systems</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
