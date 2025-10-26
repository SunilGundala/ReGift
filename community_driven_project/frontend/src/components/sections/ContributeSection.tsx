import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import {
  Code,
  Design,
  BugReport,
  Documentation,
  GitHub,
  Fork,
  PullRequest,
  CheckCircle,
  Star,
  Volunteer,
} from '@mui/icons-material';

const ContributeSection: React.FC = () => {
  const theme = useTheme();

  const contributionAreas = [
    {
      icon: <Code />,
      title: 'Frontend Development',
      description: 'React components, UI/UX improvements, and user experience enhancements',
      skills: ['React', 'TypeScript', 'Material-UI', 'CSS'],
      color: theme.palette.primary.main,
    },
    {
      icon: <Code />,
      title: 'Backend Development',
      description: 'Microservices, APIs, database design, and system architecture',
      skills: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      color: theme.palette.secondary.main,
    },
    {
      icon: <Design />,
      title: 'UI/UX Design',
      description: 'User interface design, user experience research, and accessibility',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      color: theme.palette.success.main,
    },
    {
      icon: <BugReport />,
      title: 'Testing & QA',
      description: 'Bug testing, automated testing, performance testing, and quality assurance',
      skills: ['Jest', 'Cypress', 'Manual Testing', 'Performance Testing'],
      color: theme.palette.warning.main,
    },
    {
      icon: <Documentation />,
      title: 'Documentation',
      description: 'Technical documentation, user guides, API documentation, and tutorials',
      skills: ['Technical Writing', 'Markdown', 'API Docs', 'Tutorials'],
      color: theme.palette.info.main,
    },
  ];

  const contributionSteps = [
    {
      title: 'Fork the Repository',
      description: 'Create your own copy of the project on GitHub',
      icon: <Fork />,
    },
    {
      title: 'Clone Locally',
      description: 'Download the code to your local development environment',
      icon: <GitHub />,
    },
    {
      title: 'Create Feature Branch',
      description: 'Create a new branch for your specific contribution',
      icon: <Code />,
    },
    {
      title: 'Make Changes',
      description: 'Implement your feature, fix, or improvement',
      icon: <Design />,
    },
    {
      title: 'Test Your Changes',
      description: 'Ensure your code works and doesn\'t break existing functionality',
      icon: <BugReport />,
    },
    {
      title: 'Submit Pull Request',
      description: 'Submit your changes for review by the community',
      icon: <PullRequest />,
    },
  ];

  return (
    <Box
      id="contribute"
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
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Start Contributing Today
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
            Join our open-source community and help build a platform that creates positive social impact
          </Typography>
        </Box>

        {/* Contribution Areas */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contributionAreas.map((area, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  border: `2px solid ${alpha(area.color, 0.2)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: area.color,
                    boxShadow: `0 8px 24px ${alpha(area.color, 0.15)}`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      backgroundColor: alpha(area.color, 0.1),
                      color: area.color,
                      mb: 3,
                    }}
                  >
                    {area.icon}
                  </Box>
                  
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {area.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                    }}
                  >
                    {area.description}
                  </Typography>

                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                    Skills Needed:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {area.skills.map((skill) => (
                      <Box
                        key={skill}
                        sx={{
                          px: 2,
                          py: 0.5,
                          backgroundColor: alpha(area.color, 0.1),
                          color: area.color,
                          borderRadius: 1,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Getting Started Steps */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            How to Get Started
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Stepper orientation="vertical">
                {contributionSteps.map((step, index) => (
                  <Step key={index} active={true}>
                    <StepLabel
                      StepIconComponent={() => (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                          }}
                        >
                          {step.icon}
                        </Box>
                      )}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {step.title}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body1" color="text.secondary" sx={{ pb: 2 }}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Quick Start Commands
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    1. Fork and clone the repository:
                  </Typography>
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.grey[100],
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                    }}
                  >
                    git clone https://github.com/YOUR_USERNAME/community-driven-project.git
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    2. Install dependencies:
                  </Typography>
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.grey[100],
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                    }}
                  >
                    npm run install:all
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    3. Start development:
                  </Typography>
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.grey[100],
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                    }}
                  >
                    npm run dev:frontend
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  Check out our detailed contributing guide on GitHub for more information!
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            p: 6,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            borderRadius: 3,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Volunteer sx={{ fontSize: 64, mb: 3, opacity: 0.9 }} />
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to Make a Difference?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Join hundreds of contributors building a platform that helps people share items 
            with dignity and creates positive social impact.
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHub />}
              onClick={() => window.open('https://github.com/your-username/community-driven-project', '_blank')}
              sx={{
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: alpha('white', 0.9),
                },
              }}
            >
              View on GitHub
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<Star />}
              onClick={() => window.open('https://github.com/your-username/community-driven-project', '_blank')}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: alpha('white', 0.1),
                  borderColor: 'white',
                },
              }}
            >
              Star the Project
            </Button>
          </Box>

          <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              🌟 Every contribution matters, no matter how small
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContributeSection;