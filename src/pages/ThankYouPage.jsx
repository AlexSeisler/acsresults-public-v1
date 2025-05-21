// src/pages/ThankYouPage.jsx

import React from 'react';

const ThankYouPage = () => {
  return (
    <section className="thank-you-page" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1>🎉 Thank You!</h1>
      <p>Your submission has been received. We'll be in touch shortly.</p>
      <a href="/" style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'underline' }}>
        ← Back to Home
      </a>
    </section>
  );
};

export default ThankYouPage;
