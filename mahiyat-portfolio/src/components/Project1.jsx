import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Link, List, ListItem, ListItemText, Typography } from '@mui/material';

import download from '../accessories/electronic-device-stock-management.jpg'; // Make sure to place download.png in the src folder

export default function Project1() {
  return (
    <Link
      href="https://github.com/Mahiyat/Electronic_Device_Stock_Management_System.git"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      <Card sx={{ cursor: 'pointer' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={download}
            alt="Project 1"
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
              Electronic Store Stock Management System
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <List>
                <ListItem>
                  <ListItemText primary="Language Used" secondary="Java" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Problem Solved"
                    secondary="Solved the problems of managing manually
                      the stock of an electronic store"
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
