import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="#about">
          About
        </Button>
        <Button color="inherit" href="#project">
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
