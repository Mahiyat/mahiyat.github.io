import React from 'react';
import { Container, Link, Typography } from '@mui/material';

const Header = () => {
  return (
    <Container sx={{ textAlign: 'center', padding: '2rem 0' }}>
      <Typography variant="h2">Mahiyat Tanzim</Typography>
      <Typography variant="h5" color="textSecondary">
        <Link
          href="https://www.linkedin.com/in/mahiyat-tanzim-168539206/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          LinkedIn Profile
        </Link>{' '}
        |{' '}
        <Link
          href="https://github.com/Mahiyat"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          GitHub Profile
        </Link>
      </Typography>
    </Container>
  );
};

export default Header;
