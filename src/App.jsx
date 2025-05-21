// src/App.jsx

import React from 'react';
import HeaderSection from './sections/Header/HeaderSection';
import HeroSection from './sections/Hero/HeroSection';
import WhoWeAreSection from './sections/WhoWeAre/WhoWeAreSection';
import OurSystemsSection from './sections/OurSystems/OurSystemsSection';
import FooterSection from './sections/Footer/FooterSection';
import LiveCampaignSection from './sections/LiveCampaign/LiveCampaignSection';

function App() {
  return (
    <>
      <HeaderSection />

      <main>
        <HeroSection />
        <WhoWeAreSection />
        <OurSystemsSection />
        <LiveCampaignSection />
      </main>

      <FooterSection />
    </>
  );
}

export default App;
