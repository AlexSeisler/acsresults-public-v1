// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderSection from './sections/Header/HeaderSection';
import HeroSection from './sections/Hero/HeroSection';
import WhoWeAreSection from './sections/WhoWeAre/WhoWeAreSection';
import OurSystemsSection from './sections/OurSystems/OurSystemsSection';
import LiveCampaignSection from './sections/LiveCampaign/LiveCampaignSection';
import CTAFormSection from './sections/CTAForm/CTAFormSection';
import FooterSection from './sections/Footer/FooterSection';
import ThankYouPage from './pages/ThankYouPage';

function LandingPage() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <OurSystemsSection />
        <LiveCampaignSection />
        <CTAFormSection />
      </main>
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
