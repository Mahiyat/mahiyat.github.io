import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

import Project1 from './Project1';
import Project2 from './Project2';

const Portfolio = () => {
  return (
    <Box
      id="project"
      sx={{
        padding: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '80px',
        }}
      >
        <Project1 />
        <Project2 />
      </Box>
    </Box>
  );
};

export default Portfolio;
