import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Favorite,
  Security,
  People,
  OpenInNew,
  GitHub,
  Volunteer,
} from '@mui/icons-material';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickStats = [
    { icon: <Favorite />, label: 'Community-Driven', value: 'Open Source' },
    { icon: <Security />, label: 'Privacy-First', value: 'Auto Blurring' },
    { icon: <People />, label: 'Social Impact', value: 'Helping Those in Need' },
  ];

  return (
    <Box
      id="hero"
      sx={{
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box className="fade-in">
              <Chip
                label="🚀 Open Source • Community-Driven • Social Good"
                sx={{
                  mb: 3,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  px: 2,
                  py: 0.5,
                }}
              />
              
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                }}
              >
                What You Have is Others' Dream to Have
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                A community-driven platform where people can give away unwanted items 
                for free to those in need, with advanced privacy features and community verification.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Volunteer />}
                  onClick={() => scrollToSection('contribute')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                    },
                  }}
                >
                  Join the Community
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GitHub />}
                  onClick={() => window.open('https://github.com/your-username/community-driven-project', '_blank')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  View on GitHub
                </Button>

                <Button
                  variant="text"
                  size="large"
                  endIcon={<OpenInNew />}
                  onClick={() => scrollToSection('how-it-works')}
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontSize: '1.1rem',
                    color: theme.palette.primary.main,
                  }}
                >
                  Learn More
                </Button>
              </Box>

              {/* Quick Stats */}
              <Grid container spacing={2}>
                {quickStats.map((stat, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: 2,
                        backgroundColor: alpha(theme.palette.background.paper, 0.8),
                        borderRadius: 2,
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Box
                        sx={{
                          color: theme.palette.primary.main,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {stat.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {stat.value}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box className="slide-in-right">
              <Card
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    🌟 Platform Vision
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Creating a sustainable ecosystem where unwanted items become someone's treasure, 
                    with dignity, privacy, and community support.
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                      Key Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {[
                        'Privacy Protection',
                        'Community Verification',
                        'Free Item Sharing',
                        'Microservices Architecture',
                        'Open Source',
                      ].map((feature) => (
                        <Chip
                          key={feature}
                          label={feature}
                          size="small"
                          sx={{
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.primary.main,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    Built with React, Node.js, TypeScript, and modern microservices architecture.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;