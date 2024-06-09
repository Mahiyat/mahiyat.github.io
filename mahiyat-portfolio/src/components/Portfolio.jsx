import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

import Project1 from './Project1';

const Portfolio = () => {
  return (
    <Container id="project" sx={{ padding: '2rem 0' }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Project1 />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
