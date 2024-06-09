import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container
      id="about"
      sx={{ backgroundColor: '#f9f9f9', padding: '2rem 0' }}
    >
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>
        I am Mahiyat Tanzim. I am an undergraduate currently in 3rd year 1st
        semester at the department of Computer Science and Engineering in
        Jahangirnagar University. I have skills in problem solving, programming
        language, Microsoft office, internet surfing, supervision, presentation,
        leadership, planning, self-learning, and technical communication. I
        worked part-time as a warranty wing leader in Pro 2 Interactive Ltd.
        from August 2020 to October 2020.
      </Typography>
    </Container>
  );
};

export default About;
