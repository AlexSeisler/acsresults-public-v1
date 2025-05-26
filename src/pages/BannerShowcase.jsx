


// src/sections/BannerShowcase/BannerShowcase.jsx

import React from 'react';
import './BannerShowcase.css';

const BannerShowcase = () => {
  return (
    <div className="banner-wrapper">



      <div className="banner banner-a">
        <div className="banner-content banner-a-content">
          <div className="left">
            <h1>Alex Seisler</h1>
            <p>Founder • Engineer • Creator</p>
          </div>
          <div className="right">
            <h2>SMMAA | CIAN | CreatorOps</h2>
            <p>Three Systems. One Founder. Infinite Leverage.</p>
            <p className="link">acsresultsai.net</p>
          </div>
        </div>
      </div>

      {/* 🚀 Option D – Trifecta Stack Showcase */}
      <div className="banner-trifecta">
        <div className="trifecta-label">The Trifecta</div>
        <h2 className="trifecta-stack">
          <span className="smma">SMMAA</span>
          <span className="dot">·</span>
          <span className="cian">CIAN</span>
          <span className="dot">·</span>
          <span className="creator">CreatorOps</span>
        </h2>
        <p className="trifecta-sub">Founder systems that replace teams.</p>
        <a
          className="trifecta-link"
          href="https://acsresultsai.net"
          target="_blank"
          rel="noreferrer"
        >
          acsresultsai.net
        </a>
      </div>

      {/* 🚀 NEW: Trifecta Deployment Banner */}
      <div className="banner banner-deploy">
        <div className="deploy-overlay" />

        <div className="deploy-content">
          <h2 className="deploy-title">Clone the Stack. Deploy the Trifecta.</h2>
          <p className="deploy-subheader">SMMAA • CIAN • CreatorOps</p>
          <a
            href="https://acsresultsai.net"
            className="deploy-cta"
            target="_blank"
            rel="noreferrer"
          >
            acsresultsai.net
          </a>
          <p className="deploy-badge">Founder-Built. Agent-Powered.</p>
        </div>
      </div>

    </div>
  );
};

export default BannerShowcase;
