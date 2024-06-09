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

import edsm from '../accessories/electronic-device-stock-management.jpg';

export default function Project1() {
  return (
    <Link
      href="https://github.com/Mahiyat/Electronic_Device_Stock_Management_System.git"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      sx={{paddingX: '20px'}}
    >
      <Card
        sx={{
          cursor: 'pointer',
          maxWidth: '585px',
          maxHeight: '600px',
          width: '585px',
          height: '590px',
          boxShadow: '0 4px 8px 0'
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={edsm}
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
                    primary="Description"
                    secondary="A System solving the problems of managing manually
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
