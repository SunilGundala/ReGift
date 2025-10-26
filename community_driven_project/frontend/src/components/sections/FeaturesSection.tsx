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
  Chip,
} from '@mui/material';
import {
  ShoppingCart,
  Security,
  People,
  Visibility,
  MonetizationOn,
  AdminPanelSettings,
  Search,
  Notifications,
  CloudUpload,
} from '@mui/icons-material';

const FeaturesSection: React.FC = () => {
  const theme = useTheme();

  const featureCategories = [
    {
      title: 'Core E-Commerce Features',
      description: 'Advanced platform capabilities for seamless item sharing',
      features: [
        {
          icon: <Search />,
          title: 'Advanced Product Catalog',
          description: 'Search, filter, and categorize items by type, size, condition, and more',
          tags: ['Search', 'Filters', 'Categories'],
        },
        {
          icon: <ShoppingCart />,
          title: 'Smart Claim System',
          description: 'Add items to basket and claim with confirmation and delivery info',
          tags: ['Basket', 'Claims', 'Tracking'],
        },
        {
          icon: <Notifications />,
          title: 'Real-time Notifications',
          description: 'Email, SMS, and in-app notifications for claim status and updates',
          tags: ['Email', 'SMS', 'Real-time'],
        },
      ],
    },
    {
      title: 'Privacy & Security',
      description: 'Protecting user privacy with advanced security measures',
      features: [
        {
          icon: <Visibility />,
          title: 'Automatic Media Blurring',
          description: 'AI-powered face and body blurring for all uploaded photos and videos',
          tags: ['AI', 'Privacy', 'Auto-blur'],
        },
        {
          icon: <Security />,
          title: 'Role-Based Access Control',
          description: 'Strict permissions and audit logging for sensitive data access',
          tags: ['RBAC', 'Audit', 'Security'],
        },
        {
          icon: <CloudUpload />,
          title: 'Secure Media Storage',
          description: 'Encrypted storage with controlled access to original media',
          tags: ['Encryption', 'Storage', 'Access Control'],
        },
      ],
    },
    {
      title: 'Community-Driven Features',
      description: 'Building trust and verification through community participation',
      features: [
        {
          icon: <People />,
          title: '"In Need" Verification',
          description: 'Community reviewers verify applications for accessing restricted items',
          tags: ['Verification', 'Community', 'Trust'],
        },
        {
          icon: <AdminPanelSettings />,
          title: 'Community Reviewers',
          description: 'Volunteer reviewers with guidelines and admin oversight',
          tags: ['Reviewers', 'Guidelines', 'Oversight'],
        },
        {
          icon: <MonetizationOn />,
          title: 'Sponsor & Advertiser Support',
          description: 'Sustainable funding through responsible advertising and sponsorships',
          tags: ['Sponsors', 'Ads', 'Funding'],
        },
      ],
    },
  ];

  return (
    <Box
      id="features"
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
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Powerful Features
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
            Everything you need for a secure, community-driven platform that helps 
            people share items with dignity and privacy
          </Typography>
        </Box>

        {featureCategories.map((category, categoryIndex) => (
          <Box key={categoryIndex} sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {category.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                {category.description}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {category.features.map((feature, featureIndex) => (
                <Grid item xs={12} md={4} key={featureIndex}>
                  <Card
                    className="fade-in"
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          mb: 3,
                        }}
                      >
                        {feature.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {feature.title}
                      </Typography>

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

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {feature.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                              color: theme.palette.secondary.main,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            p: 6,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Make a Difference?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: theme.palette.text.secondary }}>
            Join our community and help build a platform that creates positive social impact
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Whether you're a developer, designer, or someone passionate about social good, 
            there's a place for you in our community.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;