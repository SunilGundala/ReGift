import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useTheme,
  alpha,
  Chip,
  Avatar,
} from '@mui/material';
import {
  PersonAdd,
  Upload,
  Search,
  ShoppingCart,
  Verified,
  LocalShipping,
  RateReview,
  AdminPanelSettings,
} from '@mui/icons-material';

const HowItWorksSection: React.FC = () => {
  const theme = useTheme();

  const userJourneys = [
    {
      title: 'For Givers',
      description: 'Share your unwanted items with those who need them',
      color: theme.palette.primary.main,
      steps: [
        {
          icon: <PersonAdd />,
          title: 'Register & Login',
          description: 'Create your account with email verification',
        },
        {
          icon: <Upload />,
          title: 'List Items',
          description: 'Upload photos, add descriptions, set "In Need" tags if desired',
        },
        {
          icon: <Verified />,
          title: 'Track Claims',
          description: 'Monitor who claims your items and coordinate delivery',
        },
        {
          icon: <RateReview />,
          title: 'Build Trust',
          description: 'Receive reviews and build your community reputation',
        },
      ],
    },
    {
      title: 'For Takers',
      description: 'Find items you need from generous community members',
      color: theme.palette.secondary.main,
      steps: [
        {
          icon: <PersonAdd />,
          title: 'Join Community',
          description: 'Register and optionally apply for "In Need" status',
        },
        {
          icon: <Search />,
          title: 'Browse & Search',
          description: 'Find items using advanced filters and categories',
        },
        {
          icon: <ShoppingCart />,
          title: 'Claim Items',
          description: 'Add to basket and confirm claim with delivery details',
        },
        {
          icon: <LocalShipping />,
          title: 'Receive Items',
          description: 'Coordinate pickup/delivery and confirm receipt',
        },
      ],
    },
    {
      title: 'For Reviewers',
      description: 'Help verify "In Need" applications and build community trust',
      color: theme.palette.success.main,
      steps: [
        {
          icon: <PersonAdd />,
          title: 'Apply to Review',
          description: 'Submit application to become a community reviewer',
        },
        {
          icon: <AdminPanelSettings />,
          title: 'Get Approved',
          description: 'Admin reviews and approves reviewer applications',
        },
        {
          icon: <Verified />,
          title: 'Review Applications',
          description: 'Evaluate "In Need" status applications with blurred media',
        },
        {
          icon: <RateReview />,
          title: 'Provide Feedback',
          description: 'Approve/reject with detailed reasoning and guidelines',
        },
      ],
    },
  ];

  const platformFlow = [
    'User registers and creates profile',
    'Items are listed with optional "In Need" restrictions',
    'Community members browse and search for items',
    'Claims are made and confirmed by givers',
    'Delivery/pickup is coordinated between parties',
    'Reviews and ratings build community trust',
  ];

  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            How It Works
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Simple, secure, and community-driven process for sharing items with dignity
          </Typography>
        </Box>

        {/* User Journeys */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {userJourneys.map((journey, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  border: `2px solid ${alpha(journey.color, 0.2)}`,
                  '&:hover': {
                    borderColor: journey.color,
                    boxShadow: `0 8px 24px ${alpha(journey.color, 0.15)}`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        backgroundColor: journey.color,
                        width: 48,
                        height: 48,
                        mr: 2,
                      }}
                    >
                      {index + 1}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {journey.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {journey.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Stepper orientation="vertical" sx={{ pl: 2 }}>
                    {journey.steps.map((step, stepIndex) => (
                      <Step key={stepIndex} active={true}>
                        <StepLabel
                          StepIconComponent={() => (
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                backgroundColor: alpha(journey.color, 0.1),
                                color: journey.color,
                              }}
                            >
                              {step.icon}
                            </Box>
                          )}
                        >
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {step.title}
                          </Typography>
                        </StepLabel>
                        <StepContent>
                          <Typography variant="body2" color="text.secondary">
                            {step.description}
                          </Typography>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Platform Flow */}
        <Box
          sx={{
            p: 6,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Platform Flow Overview
          </Typography>

          <Grid container spacing={3}>
            {platformFlow.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 3,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  <Chip
                    label={index + 1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      fontWeight: 600,
                      mr: 2,
                      minWidth: 32,
                    }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {step}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Key Benefits */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Why Choose Our Platform?
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: 'Privacy First', desc: 'Automatic blurring protects user privacy' },
              { title: 'Community Trust', desc: 'Reviewer system ensures authenticity' },
              { title: 'Free to Use', desc: 'No fees for giving or receiving items' },
              { title: 'Sustainable', desc: 'Reduces waste and helps those in need' },
            ].map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;