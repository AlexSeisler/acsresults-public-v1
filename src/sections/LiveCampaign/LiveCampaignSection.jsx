import React from 'react';
import './LiveCampaignSection.css';
import { liveCampaignSection } from '../../content/content.js';

const LiveCampaignSection = () => {
  return (
    <section className="live-campaign" id="live-campaign">
      <div className="live-campaign-content">
        {/* 🧭 Emotional Anchor */}
        <h2 className="campaign-header">{liveCampaignSection.header}</h2>
        <p className="campaign-body">{liveCampaignSection.body}</p>

        {/* 🛠️ Case Study CTA */}
        <a
          href={liveCampaignSection.cta.link}
          className="campaign-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cta-label">{liveCampaignSection.cta.text}</span>
          <div className="cta-glow" />
        </a>
      </div>

      {/* 🌟 Ambient Proof Orb */}
      <div className="campaign-orb" />
    </section>
  );
};

export default LiveCampaignSection;
