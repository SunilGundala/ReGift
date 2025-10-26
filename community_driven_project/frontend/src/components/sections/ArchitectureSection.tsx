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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  Architecture,
  Storage,
  Cloud,
  Security,
  Speed,
  Monitoring,
} from '@mui/icons-material';

const ArchitectureSection: React.FC = () => {
  const theme = useTheme();

  const architectureHighlights = [
    {
      icon: <Architecture />,
      title: 'Microservices Architecture',
      description: 'Scalable, maintainable services with clear separation of concerns',
      color: theme.palette.primary.main,
    },
    {
      icon: <Cloud />,
      title: 'Cloud-Native Deployment',
      description: 'Docker containers orchestrated with Kubernetes for high availability',
      color: theme.palette.secondary.main,
    },
    {
      icon: <Storage />,
      title: 'Modern Data Stack',
      description: 'MongoDB Atlas, Redis caching, and RabbitMQ messaging',
      color: theme.palette.success.main,
    },
    {
      icon: <Security />,
      title: 'Security First',
      description: 'End-to-end encryption, RBAC, and comprehensive audit logging',
      color: theme.palette.warning.main,
    },
    {
      icon: <Speed />,
      title: 'High Performance',
      description: 'Optimized for speed with caching, CDN, and async processing',
      color: theme.palette.info.main,
    },
    {
      icon: <Monitoring />,
      title: 'Observability',
      description: 'Prometheus monitoring, Grafana dashboards, and centralized logging',
      color: theme.palette.error.main,
    },
  ];

  const services = [
    {
      service: 'API Gateway',
      port: '3000',
      description: 'Entry point, routing, rate limiting',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Frontend',
      port: '3001',
      description: 'React application',
      techStack: 'React, TypeScript, Material UI',
    },
    {
      service: 'User Service',
      port: '3002',
      description: 'Authentication, profiles, roles',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Product Service',
      port: '3003',
      description: 'Item catalog, search, filters',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Order Service',
      port: '3004',
      description: 'Claim management, tracking',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Media Service',
      port: '3005',
      description: 'Uploads, blurring, storage',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Notification Service',
      port: '3006',
      description: 'Email, SMS, in-app notifications',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Admin Service',
      port: '3007',
      description: 'Moderation, oversight, audit logs',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Sponsor Service',
      port: '3008',
      description: 'Sponsor management',
      techStack: 'Node.js, Express, TypeScript',
    },
    {
      service: 'Advertiser Service',
      port: '3009',
      description: 'Ad management, campaigns',
      techStack: 'Node.js, Express, TypeScript',
    },
  ];

  const infrastructure = [
    { component: 'Database', technology: 'MongoDB Atlas', purpose: 'Primary data storage' },
    { component: 'Cache', technology: 'Redis', purpose: 'Session storage and caching' },
    { component: 'Message Queue', technology: 'RabbitMQ', purpose: 'Inter-service communication' },
    { component: 'Containerization', technology: 'Docker', purpose: 'Application packaging' },
    { component: 'Orchestration', technology: 'Kubernetes', purpose: 'Container management' },
    { component: 'Monitoring', technology: 'Prometheus + Grafana', purpose: 'System observability' },
    { component: 'Load Balancer', technology: 'Nginx', purpose: 'Traffic distribution' },
    { component: 'CI/CD', technology: 'GitHub Actions', purpose: 'Automated deployment' },
  ];

  const techStack = [
    { category: 'Frontend', technologies: ['React 18', 'TypeScript', 'Material-UI', 'React Router'] },
    { category: 'Backend', technologies: ['Node.js', 'Express.js', 'TypeScript', 'JWT Auth'] },
    { category: 'Database', technologies: ['MongoDB Atlas', 'Mongoose ODM', 'Redis Cache'] },
    { category: 'Infrastructure', technologies: ['Docker', 'Kubernetes', 'Nginx', 'Prometheus'] },
    { category: 'Development', technologies: ['ESLint', 'Prettier', 'Jest', 'GitHub Actions'] },
    { category: 'Security', technologies: ['bcrypt', 'Helmet.js', 'Rate Limiting', 'CORS'] },
  ];

  return (
    <Box
      id="architecture"
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
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.info.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Architecture
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
            Built with modern, scalable architecture designed for high availability and performance
          </Typography>
        </Box>

        {/* Architecture Highlights */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {architectureHighlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${alpha(highlight.color, 0.15)}`,
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
                      backgroundColor: alpha(highlight.color, 0.1),
                      color: highlight.color,
                      mb: 3,
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Services Table */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Microservices Overview
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.05) }}>
                  <TableCell sx={{ fontWeight: 600 }}>Service</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Port</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Tech Stack</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:nth-of-type(odd)': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.02),
                      },
                    }}
                  >
                    <TableCell sx={{ fontWeight: 500 }}>{service.service}</TableCell>
                    <TableCell>
                      <Chip
                        label={service.port}
                        size="small"
                        sx={{
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell sx={{ color: theme.palette.text.secondary }}>
                      {service.techStack}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Infrastructure Components */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Infrastructure Components
          </Typography>
          <Grid container spacing={3}>
            {infrastructure.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {item.component}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                    }}
                  >
                    {item.technology}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.purpose}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technology Stack */}
        <Box
          sx={{
            p: 6,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.info.main, 0.02)} 100%)`,
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
            Technology Stack
          </Typography>
          <Grid container spacing={4}>
            {techStack.map((stack, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {stack.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {stack.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: alpha(theme.palette.info.main, 0.1),
                          color: theme.palette.info.main,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Architecture Benefits */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Architecture Benefits
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: 'Scalability', desc: 'Independent service scaling based on demand' },
              { title: 'Maintainability', desc: 'Clear separation of concerns and modular design' },
              { title: 'Reliability', desc: 'Fault isolation and graceful degradation' },
              { title: 'Performance', desc: 'Optimized data flow and caching strategies' },
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

export default ArchitectureSection;