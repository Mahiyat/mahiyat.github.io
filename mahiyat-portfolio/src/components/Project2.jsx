import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import ora from '../accessories/obe-result-analysis.jpg';

export default function Project1() {
  return (
    <Link
      href="https://github.com/Mahiyat/obe-project-result-analysis.git"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      sx={{paddingX: '20px'}}
    >
      <Card
        sx={{
          cursor: 'pointer',
          maxWidth: '585px',
          maxHeight: '590px',
          width: '585px',
          height: '600px',
          boxShadow: '0 4px 8px 0'
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={ora}
            alt="Project 2"
            sx={{
              height: '300px',
              width: '100%',
              marginTop: '8px',
              objectFit: 'contain',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              OBE Marks Entry and Result Analysis System
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <List>
                <ListItem>
                  <ListItemText
                    primary="Frontend Technology"
                    secondary="React"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Backend Technology"
                    secondary="Django"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Description"
                    secondary="A marks entry and result analysis system based on the Outcome Based Education (OBE), with an AI feature for commenting"
                  />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
