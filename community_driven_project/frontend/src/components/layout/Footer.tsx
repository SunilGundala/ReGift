import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  Twitter,
  LinkedIn,
  Email,
  Favorite,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();

  const footerLinks = {
    Platform: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'Privacy & Security', href: '#privacy' },
      { label: 'Community Guidelines', href: '#community' },
    ],
    Developers: [
      { label: 'GitHub Repository', href: 'https://github.com/your-username/community-driven-project' },
      { label: 'API Documentation', href: '#api-docs' },
      { label: 'Contributing Guide', href: '#contribute' },
      { label: 'Architecture', href: '#architecture' },
    ],
    Community: [
      { label: 'Join as Contributor', href: '#contribute' },
      { label: 'Become a Reviewer', href: '#reviewer' },
      { label: 'Sponsor the Platform', href: '#sponsor' },
      { label: 'Code of Conduct', href: '#conduct' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#privacy-policy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Open Source License', href: 'https://github.com/your-username/community-driven-project/blob/main/LICENSE' },
      { label: 'Ethics & Compliance', href: '#ethics' },
    ],
  };

  const socialLinks = [
    { icon: <GitHub />, href: 'https://github.com/your-username/community-driven-project', label: 'GitHub' },
    { icon: <Twitter />, href: 'https://twitter.com/communityplatform', label: 'Twitter' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/company/community-platform', label: 'LinkedIn' },
    { icon: <Email />, href: 'mailto:community@yourproject.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Favorite sx={{ color: theme.palette.primary.light }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Community Platform
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, color: theme.palette.grey[300] }}>
              "What you have is others' dream to have" - Creating a sustainable ecosystem 
              where unwanted items become someone's treasure, with dignity, privacy, and 
              community support.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.grey[300],
                    '&:hover': {
                      color: theme.palette.primary.light,
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      color: theme.palette.grey[300],
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: theme.palette.primary.light,
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: theme.palette.grey[700] }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
            © 2024 Community-Driven E-Commerce Platform. Open source under MIT License.
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
            Made with ❤️ by the community for social good
          </Typography>
        </Box>

        {/* Legal Notice */}
        <Box sx={{ mt: 3, p: 2, backgroundColor: theme.palette.grey[800], borderRadius: 1 }}>
          <Typography variant="caption" sx={{ color: theme.palette.grey[400] }}>
            <strong>Legal Notice:</strong> This is an open-source, community-driven project. 
            All contributions are voluntary and unpaid. The platform is designed for launch 
            in India with proper legal compliance. No compensation is provided to contributors, 
            especially those on F1 student visas in the United States.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;