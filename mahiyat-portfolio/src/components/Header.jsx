import React from 'react';
import { Container, Typography, Box, Button, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Phone, LinkedIn, GitHub, Download } from '@mui/icons-material';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '120px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
    animation: 'float 20s ease-in-out infinite',
  },
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
}));

const ProfileImage = styled(Box)(({ theme }) => ({
  width: 180,
  height: 180,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 30px',
  fontSize: '4rem',
  fontWeight: 'bold',
  border: '4px solid rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(10px)',
  animation: 'pulse 2s ease-in-out infinite alternate',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: 'white',
  fontWeight: 600,
  margin: '4px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease',
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: 'white',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '25px',
  padding: '10px 20px',
  margin: '8px',
  fontWeight: 600,
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  },
  transition: 'all 0.3s ease',
}));

const Header = () => {
  return (
    <HeroSection id="home">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center">
          <ProfileImage>
            MT
          </ProfileImage>
          
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              marginBottom: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Mahiyat Tanzim
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 3, 
              opacity: 0.9,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Computer Science & Engineering Student | Software Developer | Problem Solver
          </Typography>

          <Box sx={{ marginBottom: 4 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                marginBottom: 2, 
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              🎓 Jahangirnagar University | CGPA: 3.99/4.00
            </Typography>
            
            <Stack 
              direction="row" 
              flexWrap="wrap" 
              justifyContent="center" 
              sx={{ marginBottom: 3 }}
            >
              <StyledChip label="Python" />
              <StyledChip label="C++" />
              <StyledChip label="Java" />
              <StyledChip label="JavaScript" />
              <StyledChip label="React" />
              <StyledChip label="Django" />
              <StyledChip label="Node.js" />
              <StyledChip label="AI/ML" />
            </Stack>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            <ContactButton
              startIcon={<Email />}
              href="mailto:mahiyat.tanzim@gmail.com"
              component="a"
            >
              Email
            </ContactButton>
            
            {/* <ContactButton
              startIcon={<Phone />}
              href="tel:+8801728714400"
              component="a"
            >
              Call
            </ContactButton> */}
            
            <ContactButton
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/mahiyat-tanzim-168539206/"
              target="_blank"
              rel="noopener noreferrer"
              component="a"
            >
              LinkedIn
            </ContactButton>
            
            <ContactButton
              startIcon={<GitHub />}
              href="https://github.com/Mahiyat"
              target="_blank"
              rel="noopener noreferrer"
              component="a"
            >
              GitHub
            </ContactButton>
            
            {/* <ContactButton
              startIcon={<Download />}
              sx={{ 
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                border: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
                }
              }}
            >
              Download Resume
            </ContactButton> */}
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Header;
