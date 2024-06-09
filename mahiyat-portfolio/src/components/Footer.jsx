import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
      }}
    >
      <Typography>&copy; 2023 Mahiyat Tanzim. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
