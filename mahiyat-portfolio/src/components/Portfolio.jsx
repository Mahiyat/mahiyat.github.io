import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Project1 from './Project1';

const SectionContainer = styled(Container)(({ theme }) => ({
  padding: '80px 0',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '2px',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: '16px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: '#666',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto 60px',
  lineHeight: 1.8,
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  marginBottom: '60px',
  flexWrap: 'wrap',
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '20px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '20px',
  color: 'white',
  minWidth: '120px',
  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)',
  },
}));

const Portfolio = () => {
  const stats = [
    { number: '6+', label: 'Projects' },
    { number: '8+', label: 'Technologies' },
    { number: '1', label: 'Publication' },
    { number: '6+', label: 'Awards' },
  ];

  return (
    <SectionContainer id="project" maxWidth="xl">
      <Box>
        <SectionTitle variant="h3" component="h2">
          Featured Projects
        </SectionTitle>
        
        <SectionSubtitle variant="h6">
          Explore my portfolio of innovative projects spanning web development, 
          mobile applications, AI/ML implementations, and research publications.
        </SectionSubtitle>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 1 }}>
                {stat.number}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, opacity: 0.9 }}>
                {stat.label}
              </Typography>
            </StatItem>
          ))}
        </StatsContainer>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} maxWidth="xl" sx={{ mx: 'auto' }}>
          <Grid item xs={12} sm={15} md={15} lg={15} xl={15}>
            <Project1 />
          </Grid>
          {/* Additional project cards */}
        </Grid>

        <Box sx={{ marginTop: 6, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2, color: '#333' }}>
            More Projects Coming Soon!
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: '500px', margin: '0 auto' }}>
            I'm continuously working on new and exciting projects. Visit my GitHub profile 
            to see my latest work and contributions to open-source projects.
          </Typography>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Portfolio;
