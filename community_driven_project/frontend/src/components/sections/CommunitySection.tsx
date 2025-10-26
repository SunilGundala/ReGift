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
  Avatar,
  Chip,
} from '@mui/material';
import {
  People,
  Volunteer,
  AdminPanelSettings,
  MonetizationOn,
  Campaign,
  GitHub,
  Discord,
  Email,
  Star,
} from '@mui/icons-material';

const CommunitySection: React.FC = () => {
  const theme = useTheme();

  const communityRoles = [
    {
      icon: <Volunteer />,
      title: 'Contributors',
      description: 'Developers, designers, and enthusiasts building the platform',
      color: theme.palette.primary.main,
      responsibilities: [
        'Code development and bug fixes',
        'UI/UX design improvements',
        'Documentation and tutorials',
        'Testing and quality assurance',
      ],
      callToAction: 'Start Contributing',
      link: '#contribute',
    },
    {
      icon: <AdminPanelSettings />,
      title: 'Reviewers',
      description: 'Community members who verify "In Need" applications',
      color: theme.palette.secondary.main,
      responsibilities: [
        'Review "In Need" status applications',
        'Follow strict verification guidelines',
        'Provide detailed feedback',
        'Maintain community trust',
      ],
      callToAction: 'Become a Reviewer',
      link: '#reviewer-application',
    },
    {
      icon: <People />,
      title: 'Admins',
      description: 'Platform moderators ensuring safety and compliance',
      color: theme.palette.success.main,
      responsibilities: [
        'Approve reviewer applications',
        'Cross-verify rejected applications',
        'Monitor platform security',
        'Enforce community guidelines',
      ],
      callToAction: 'Admin Guidelines',
      link: '#admin-info',
    },
    {
      icon: <MonetizationOn />,
      title: 'Sponsors',
      description: 'Organizations supporting platform operations',
      color: theme.palette.warning.main,
      responsibilities: [
        'Provide operational funding',
        'Support community initiatives',
        'Promote social good values',
        'Enable platform sustainability',
      ],
      callToAction: 'Become a Sponsor',
      link: '#sponsor-application',
    },
    {
      icon: <Campaign />,
      title: 'Advertisers',
      description: 'Responsible businesses helping fund operations',
      color: theme.palette.info.main,
      responsibilities: [
        'Provide non-intrusive advertising',
        'Align with community values',
        'Support platform funding',
        'Respect user privacy',
      ],
      callToAction: 'Advertiser Program',
      link: '#advertiser-info',
    },
  ];

  const communityStats = [
    { label: 'Open Source', value: 'MIT License', icon: <GitHub /> },
    { label: 'Community First', value: 'Volunteer Driven', icon: <People /> },
    { label: 'Social Impact', value: 'Helping Those in Need', icon: <Volunteer /> },
    { label: 'Transparency', value: 'Public Development', icon: <Star /> },
  ];

  const joinChannels = [
    {
      icon: <GitHub />,
      title: 'GitHub',
      description: 'Contribute code, report issues, and track development',
      link: 'https://github.com/your-username/community-driven-project',
      color: theme.palette.grey[800],
    },
    {
      icon: <Discord />,
      title: 'Discord',
      description: 'Join real-time discussions and get help',
      link: 'https://discord.gg/your-server',
      color: '#5865F2',
    },
    {
      icon: <Email />,
      title: 'Email',
      description: 'Contact us for partnerships and inquiries',
      link: 'mailto:community@yourproject.com',
      color: theme.palette.primary.main,
    },
  ];

  return (
    <Box
      id="community"
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
            Join Our Community
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
            Be part of a movement that's creating positive social impact through technology and community collaboration
          </Typography>
        </Box>

        {/* Community Stats */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {communityStats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {stat.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.value}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Community Roles */}
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontWeight: 600,
            color: theme.palette.text.primary,
          }}
        >
          Community Roles & Opportunities
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {communityRoles.map((role, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  border: `2px solid ${alpha(role.color, 0.2)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: role.color,
                    boxShadow: `0 8px 24px ${alpha(role.color, 0.15)}`,
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        backgroundColor: role.color,
                        width: 48,
                        height: 48,
                        mr: 2,
                      }}
                    >
                      {role.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {role.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {role.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ flexGrow: 1, mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Responsibilities:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {role.responsibilities.map((responsibility, respIndex) => (
                        <Box key={respIndex} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: role.color,
                              mt: 1,
                              mr: 2,
                              flexShrink: 0,
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {responsibility}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: role.color,
                      '&:hover': {
                        backgroundColor: alpha(role.color, 0.8),
                      },
                    }}
                    onClick={() => {
                      const element = document.getElementById(role.link.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {role.callToAction}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Join Channels */}
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
            Connect With Us
          </Typography>

          <Grid container spacing={4}>
            {joinChannels.map((channel, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 24px ${alpha(channel.color, 0.15)}`,
                    },
                  }}
                  onClick={() => window.open(channel.link, '_blank')}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      backgroundColor: alpha(channel.color, 0.1),
                      color: channel.color,
                      mb: 3,
                    }}
                  >
                    {channel.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {channel.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {channel.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Community Values */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Our Community Values
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              'Inclusivity & Respect',
              'Privacy & Security',
              'Transparency',
              'Social Impact',
              'Collaboration',
              'Open Source',
            ].map((value) => (
              <Grid item key={value}>
                <Chip
                  label={value}
                  sx={{
                    px: 2,
                    py: 1,
                    fontSize: '1rem',
                    fontWeight: 500,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunitySection;