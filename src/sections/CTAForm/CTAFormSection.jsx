// src/sections/CTAForm/CTAFormSection.jsx

import React, { useState } from 'react';
import './CTAFormSection.css';
import { ctaFormSection } from '../../content/content.js';

const CTAFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    useCase: '',
  });

  const [status, setStatus] = useState(null);

  // ✅ Correct order — define URL params first, then extract "source"
  const urlParams = new URLSearchParams(window.location.search);
  const sourceParam = urlParams.get('source') || window.location.href;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/.netlify/functions/submitToAirtable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: sourceParam,
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', useCase: '' });
        window.location.href = '/thank-you';
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="cta-form" id="contact">
      <h2>{ctaFormSection.header}</h2>
      <p>{ctaFormSection.body}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="useCase"
          value={formData.useCase}
          onChange={handleChange}
          required
        >
          <option value="">What are you looking to automate?</option>
          <option value="School Campaign">School Campaign</option>
          <option value="Product Launch">Product Launch</option>
          <option value="SMMA / Client Work">SMMA / Client Work</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Get in Touch →</button>

        {status === 'loading' && <p>Submitting...</p>}
        {status === 'success' && <p>✅ Submitted successfully!</p>}
        {status === 'error' && <p>❌ Something went wrong. Try again.</p>}
      </form>
    </section>
  );
};

export default CTAFormSection;
