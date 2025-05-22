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

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-ambient" />
      
      <nav className="top-nav" role="navigation" aria-label="Main Navigation">
        <div className="logo">
        <img src="/Logo.png" alt="ACS Results Logo" />
        <span className="logo-text">ACS Results</span>
      </div>


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
          <li><a href="#hero">Home</a></li>
          <li><a href="#who-we-are">Who We Are</a></li>
          <li><a href="#our-systems">Systems</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      </nav>
    </header>
  );
};

export default HeaderSection;
