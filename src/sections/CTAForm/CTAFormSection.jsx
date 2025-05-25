// src/sections/CTAForm/CTAFormSection.jsx

import React, { useState } from 'react';
import './CTAFormSection.css';
import { ctaFormSection } from '../../content/content.js';

const CTAFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    useCase: '',
    description: '',
  });

  const [status, setStatus] = useState(null);

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
        setFormData({
          name: '',
          email: '',
          useCase: '',
          description: '',
        });
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
    <section className="cta-form-section" id="contact">
      <div className="cta-form-wrapper">
        <h2 className="cta-form-header">{ctaFormSection.header}</h2>
        <p className="cta-form-subtext">{ctaFormSection.body}</p>

        <form className="cta-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Use Case Dropdown */}
          <div className="form-group">
            <label htmlFor="useCase">What are you looking to automate?</label>
            <select
              name="useCase"
              id="useCase"
              value={formData.useCase}
              onChange={handleChange}
              required
            >
              <option value="">Select a use case</option>
              {ctaFormSection.dropdownOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Description Field */}
          <div className="form-group">
            <label htmlFor="description">Describe your needs</label>
            <textarea
              name="description"
              id="description"
              placeholder="What exactly are you looking to build or automate?"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="cta-submit-button">
            {ctaFormSection.cta}
          </button>

          {/* Status Feedback */}
          <div className="cta-form-status">
            {status === 'loading' && <p className="status loading">Submitting...</p>}
            {status === 'success' && <p className="status success">✅ Submitted successfully!</p>}
            {status === 'error' && <p className="status error">❌ Something went wrong. Try again.</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTAFormSection;
