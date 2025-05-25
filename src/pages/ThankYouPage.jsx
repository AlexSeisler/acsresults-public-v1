// src/pages/ThankYouPage.jsx

import React from 'react';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <section className="thank-you-page" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1>🎉 You're In.</h1>
      <p>
        Thanks for connecting with ACS Results. Your submission has been received and we’ll follow up shortly.
        In the meantime, jump into our private workspace and unlock your system track.
      </p>

      <a
        href="https://www.skool.com/acs-results-ai-trifecta-4974/about?ref=6827c5683eb14f0892937e9c1c30c835"
        target="_blank"
        rel="noreferrer"
        className="thank-you-cta"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#00c8ff',
          color: '#000',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(0, 200, 255, 0.3)',
        }}
      >
        → Join the Trifecta OS on Skool
      </a>
    </section>
  );
};

export default ThankYouPage;
