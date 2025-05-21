// src/sections/LiveCampaign/LiveCampaignSection.jsx

import React from 'react';
import './LiveCampaignSection.css';
import { liveCampaignSection } from '../../content/content.js';

const LiveCampaignSection = () => {
  return (
    <section className="live-campaign" id="live-campaign">
      {/* 🎯 Strategy: Proof & Engagement */}
      <h2 className="campaign-header">{liveCampaignSection.header}</h2>
      <p className="campaign-body">{liveCampaignSection.body}</p>
      <a
        href="#"
        className="campaign-cta"
        onClick={(e) => {
          e.preventDefault();
          alert('🔗 Campaign highlights coming soon...');
        }}
      >
        {liveCampaignSection.cta}
      </a>
    </section>
  );
};

export default LiveCampaignSection;
