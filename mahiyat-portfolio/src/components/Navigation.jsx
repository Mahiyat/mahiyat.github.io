import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu, Close, Home, Person, Work, Phone } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'transparent',
  backdropFilter: scrolled ? 'blur(20px)' : 'none',
  boxShadow: scrolled 
    ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
    : 'none',
  border: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
  transition: 'all 0.3s ease',
  padding: '0',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: '0 24px',
  minHeight: '70px',
}));

const Logo = styled(Typography)(({ theme, scrolled }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  background: scrolled 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'white',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
}));

const NavButton = styled(Button)(({ theme, scrolled }) => ({
  color: scrolled ? '#333' : 'white',
  fontWeight: 600,
  fontSize: '1rem',
  padding: '8px 20px',
  margin: '0 8px',
  borderRadius: '25px',
  textTransform: 'none',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: scrolled 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    transform: 'translateY(-2px)',
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover:before': {
    width: '80%',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme, scrolled }) => ({
  color: scrolled ? '#333' : 'white',
  '&:hover': {
    backgroundColor: scrolled 
      ? 'rgba(102, 126, 234, 0.1)'
      : 'rgba(255, 255, 255, 0.1)',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '20px 0',
  },
}));

const DrawerListItem = styled(ListItem)(({ theme }) => ({
  margin: '8px 16px',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateX(8px)',
  },
}));

const navItems = [
  { label: 'Home', href: '#home', icon: <Home /> },
  { label: 'About', href: '#about', icon: <Person /> },
  { label: 'Projects', href: '#project', icon: <Work /> },
  { label: 'Contact', href: '#contact', icon: <Phone /> },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box>
      <Box sx={{ textAlign: 'center', padding: '20px 0 40px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <Logo scrolled={false}>MT</Logo>
        <Typography variant="body2" sx={{ opacity: 0.8, marginTop: 1 }}>
          Software Developer
        </Typography>
      </Box>
      
      <List>
        {navItems.map((item) => (
          <DrawerListItem key={item.label} onClick={() => handleNavClick(item.href)}>
            <Box sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </Box>
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: '1.1rem'
              }}
            />
          </DrawerListItem>
        ))}
      </List>

      <Box sx={{ position: 'absolute', bottom: 20, left: 20, right: 20, textAlign: 'center' }}>
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          © 2024 Mahiyat Tanzim
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <StyledToolbar>
          <Logo 
            scrolled={scrolled}
            onClick={() => handleNavClick('#home')}
          >
            Mahiyat Tanzim
          </Logo>

          {isMobile ? (
            <MobileMenuButton
              scrolled={scrolled}
              onClick={handleDrawerToggle}
              aria-label="open drawer"
            >
              <Menu />
            </MobileMenuButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.label}
                  scrolled={scrolled}
                  onClick={() => handleNavClick(item.href)}
                  startIcon={item.icon}
                >
                  {item.label}
                </NavButton>
              ))}
            </Box>
          )}
        </StyledToolbar>
      </StyledAppBar>

      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>
        {drawer}
      </StyledDrawer>
    </>
  );
};

export default Navigation;
