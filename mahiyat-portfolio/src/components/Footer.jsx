import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider, Link, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LinkedIn, GitHub, Email, Phone, LocationOn, School, Code, Favorite } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  color: 'white',
  padding: '60px 0 20px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.1,
    pointerEvents: 'none',
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  margin: '0 8px',
  transition: 'all 0.3s ease',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-3px)',
    color: '#667eea',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
  padding: '8px 0',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#667eea',
    transform: 'translateX(5px)',
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  margin: '4px',
  fontSize: '0.75rem',
  fontWeight: 500,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    backgroundColor: 'rgba(102, 126, 234, 0.3)',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease',
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/mahiyat-tanzim-168539206/', label: 'LinkedIn' },
    { icon: <GitHub />, url: 'https://github.com/Mahiyat', label: 'GitHub' },
    { icon: <Email />, url: 'mailto:mahiyat.tanzim@gmail.com', label: 'Email' },
  ];

  const skills = [
    'Python', 'C++', 'Java', 'JavaScript', 'React', 'Node.js', 
    'Django', 'MySQL', 'MongoDB', 'Docker', 'Git'
  ];

  const contactInfo = [
    { icon: <Email />, text: 'mahiyat.tanzim@gmail.com', href: 'mailto:mahiyat.tanzim@gmail.com' },
    // { icon: <Phone />, text: '+8801728714400', href: 'tel:+8801728714400' },
    { icon: <LocationOn />, text: 'Dhaka, Bangladesh', href: null },
    { icon: <School />, text: 'Computer Science Undergraduate', href: null },
  ];

  return (
    <FooterContainer>
      <Container id="contact" maxWidth="lg">
        <FooterSection>
          <Grid container spacing={4}>
            {/* About Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                About Me
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}>
                Passionate software developer with expertise in full-stack development. 
                I love creating innovative solutions and contributing to open-source projects.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <SocialIconButton
                    key={index}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </SocialIconButton>
                ))}
              </Box>
            </Grid>

            {/* Contact Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Contact Info
              </Typography>
              {contactInfo.map((contact, index) => (
                <ContactInfo key={index}>
                  <Box sx={{ mr: 2, color: '#667eea' }}>
                    {contact.icon}
                  </Box>
                  {contact.href ? (
                    <Link
                      href={contact.href}
                      color="inherit"
                      underline="none"
                      sx={{
                        '&:hover': {
                          color: '#667eea',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <Typography variant="body2">{contact.text}</Typography>
                    </Link>
                  ) : (
                    <Typography variant="body2">{contact.text}</Typography>
                  )}
                </ContactInfo>
              ))}
            </Grid>

            {/* Skills Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
                Skills & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, index) => (
                  <SkillChip key={index} label={skill} size="small" />
                ))}
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

          {/* Copyright Section */}
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="body2" sx={{ opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              © {currentYear} Mahiyat Tanzim. Made with
              <Favorite sx={{ color: '#e74c3c', fontSize: '1rem' }} />
              and lots of coffee.
            </Typography>
          </Box>
        </FooterSection>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
