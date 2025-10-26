import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Code,
  People,
  Security,
  Architecture,
  OpenSource,
  Verified,
} from '@mui/icons-material';

const StatsSection: React.FC = () => {
  const theme = useTheme();

  const stats = [
    {
      icon: <Code />,
      title: 'Microservices',
      value: '9',
      description: 'Scalable services architecture',
      color: theme.palette.primary.main,
    },
    {
      icon: <People />,
      title: 'User Roles',
      value: '6',
      description: 'Givers, Takers, Reviewers, Admins, Sponsors, Advertisers',
      color: theme.palette.secondary.main,
    },
    {
      icon: <Security />,
      title: 'Privacy Features',
      value: '100%',
      description: 'Automatic face/body blurring',
      color: theme.palette.success.main,
    },
    {
      icon: <Architecture />,
      title: 'Tech Stack',
      value: 'Modern',
      description: 'React, Node.js, TypeScript, MongoDB',
      color: theme.palette.warning.main,
    },
    {
      icon: <OpenSource />,
      title: 'Open Source',
      value: 'MIT',
      description: 'Community-driven development',
      color: theme.palette.info.main,
    },
    {
      icon: <Verified />,
      title: 'Community Verified',
      value: 'Trusted',
      description: 'Reviewer-based verification system',
      color: theme.palette.error.main,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            Platform at a Glance
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Built with modern technology and community-first principles
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className="fade-in"
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 24px ${alpha(stat.color, 0.15)}`,
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: alpha(stat.color, 0.1),
                      color: stat.color,
                      mb: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {stat.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {stat.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            🚀 Project Status
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Currently in development phase with comprehensive requirements and architecture completed.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Join our community to help build this platform and make a positive social impact!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;