import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import CommunitySection from '../components/sections/CommunitySection';
import ArchitectureSection from '../components/sections/ArchitectureSection';
import ContributeSection from '../components/sections/ContributeSection';
import StatsSection from '../components/sections/StatsSection';
import PrivacySection from '../components/sections/PrivacySection';

const LandingPage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PrivacySection />
      <CommunitySection />
      <ArchitectureSection />
      <ContributeSection />
    </Box>
  );
};

export default LandingPage;