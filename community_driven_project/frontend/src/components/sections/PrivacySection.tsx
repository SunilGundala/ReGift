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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Security,
  Visibility,
  Lock,
  AdminPanelSettings,
  Audit,
  Shield,
  VerifiedUser,
  Policy,
} from '@mui/icons-material';

const PrivacySection: React.FC = () => {
  const theme = useTheme();

  const privacyFeatures = [
    {
      icon: <Visibility />,
      title: 'Automatic Media Blurring',
      description: 'AI-powered face and body detection automatically blurs all uploaded photos and videos to protect user privacy.',
      details: [
        'Real-time processing during upload',
        'Faces and bodies automatically detected',
        'Original media stored securely',
        'Only blurred versions shown to reviewers',
      ],
    },
    {
      icon: <AdminPanelSettings />,
      title: 'Role-Based Access Control',
      description: 'Strict permission system ensures only authorized personnel can access sensitive data.',
      details: [
        'Reviewers see only blurred media',
        'Admins can access originals for verification',
        'Audit trail for all access attempts',
        'Time-limited access permissions',
      ],
    },
    {
      icon: <Lock />,
      title: 'Data Encryption',
      description: 'All data is encrypted at rest and in transit using industry-standard protocols.',
      details: [
        'AES-256 encryption for stored data',
        'TLS 1.3 for data in transit',
        'Encrypted database connections',
        'Secure API communications',
      ],
    },
    {
      icon: <Audit />,
      title: 'Comprehensive Audit Logging',
      description: 'Every sensitive action is logged for transparency and security monitoring.',
      details: [
        'Media access logging',
        'Application review tracking',
        'Admin action monitoring',
        'Security event alerts',
      ],
    },
  ];

  const complianceItems = [
    {
      icon: <Policy />,
      title: 'Indian Data Protection Laws',
      description: 'Full compliance with IT Act 2000 and Digital Personal Data Protection Act 2023',
    },
    {
      icon: <VerifiedUser />,
      title: 'User Consent Management',
      description: 'Clear consent mechanisms for data collection and processing',
    },
    {
      icon: <Shield />,
      title: 'Privacy by Design',
      description: 'Privacy considerations built into every feature from the ground up',
    },
    {
      icon: <Security />,
      title: 'Regular Security Audits',
      description: 'Continuous monitoring and assessment of security measures',
    },
  ];

  return (
    <Box
      id="privacy"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Privacy & Security First
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
            Protecting user privacy and data security is at the core of our platform design
          </Typography>
        </Box>

        {/* Privacy Features */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {privacyFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${alpha(theme.palette.success.main, 0.15)}`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        backgroundColor: alpha(theme.palette.success.main, 0.1),
                        color: theme.palette.success.main,
                        mr: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                    }}
                  >
                    {feature.description}
                  </Typography>

                  <List dense>
                    {feature.details.map((detail, detailIndex) => (
                      <ListItem key={detailIndex} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.success.main,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Compliance Section */}
        <Box
          sx={{
            p: 6,
            background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
            borderRadius: 3,
            border: `1px solid ${alpha(theme.palette.success.main, 0.1)}`,
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
            Legal Compliance & Standards
          </Typography>

          <Grid container spacing={3}>
            {complianceItems.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    p: 3,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    border: `1px solid ${alpha(theme.palette.success.main, 0.1)}`,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: 1.5,
                      backgroundColor: alpha(theme.palette.success.main, 0.1),
                      color: theme.palette.success.main,
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Privacy Promise */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            Our Privacy Promise
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            We believe that helping others shouldn't come at the cost of your privacy. 
            Every feature is designed with privacy-first principles, ensuring that your 
            personal information and dignity are always protected.
          </Typography>
          
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              p: 3,
              backgroundColor: alpha(theme.palette.success.main, 0.1),
              borderRadius: 2,
              border: `2px solid ${alpha(theme.palette.success.main, 0.2)}`,
            }}
          >
            <Shield sx={{ color: theme.palette.success.main, fontSize: 32 }} />
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Privacy-First Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Built with privacy and security as fundamental requirements
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacySection;