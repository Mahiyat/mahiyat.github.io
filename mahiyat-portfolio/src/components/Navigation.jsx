import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button color="inherit" href="#about">
          About
        </Button>
        <Button color="inherit" href="#project">
          Projects
        </Button>
        <Button color="inherit" href="#contest">
          Contests
        </Button>
        <Button color="inherit" href="#research">
          Researches
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
