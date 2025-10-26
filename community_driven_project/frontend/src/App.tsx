import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import LandingPage from './pages/LandingPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Future routes will be added here */}
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;