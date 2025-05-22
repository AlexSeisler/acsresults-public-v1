// src/sections/WhoWeAre/WhoWeAreSection.jsx

import React, { useEffect, useRef } from 'react';
import './WhoWeAreSection.css';
import { whoWeAreSection } from '../../content/content.js';

const WhoWeAreSection = () => {
  const carouselRef = useRef();

  useEffect(() => {
  const ring = carouselRef.current;
  let angle = 0;
  let isVisible = true;

  const handleScroll = (e) => {
    if (!isVisible) return;
    e.preventDefault();
    angle += e.deltaY * 0.2;
    ring.style.transform = `rotateY(${angle}deg)`;
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (!isVisible) ring.style.animationPlayState = 'paused';
      else ring.style.animationPlayState = 'running';
    },
    { threshold: 0.3 }
  );

  observer.observe(ring);
  ring.addEventListener('wheel', handleScroll, { passive: false });

  return () => {
    observer.disconnect();
    ring.removeEventListener('wheel', handleScroll);
  };
}, []);


  return (
    <section className="who-we-are-section" id="who-we-are">
      <div className="who-we-are-content">
        {/* 🎯 Trust Header */}
        <h2 className="who-header">{whoWeAreSection.header}</h2>

        {/* 🧠 Multi-line founder intro */}
        <p className="who-body">
          {whoWeAreSection.body.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {/* 🧭 Section Label */}
        <h3 className="carousel-label">We Power</h3>

        {/* 🔁 Interactive 3D Carousel */}
        <div className="who-carousel">
          <div className="carousel-hover-capture">
            <div className="carousel-motion-wrapper">
              <div className="carousel-ring" ref={carouselRef}>
                {whoWeAreSection.cards.map((card, index) => (
                  <div
                    key={index}
                    className="carousel-card"
                    title={whoWeAreSection.cardDescriptions[index]}
                  >
                    <p>{card}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default WhoWeAreSection;
