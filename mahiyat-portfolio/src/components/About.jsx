import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const About = () => {
  return (
    <Container
      id="about"
      sx={{ backgroundColor: '#f9f9f9', padding: '2rem 0' }}
    >
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography align="justify" paragraph>
        My name is Mahiyat Tanzim, and I am an undergraduate student in my
        fourth year, first semester, at the Department of Computer Science and
        Engineering at Jahangirnagar University. I have a keen interest in
        software engineering and teaching, and I am passionate about
        continuously learning new things.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Problem Solving" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Programming Languages"
            secondary="Java, Python, C++"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Frontend Technologies"
            secondary="HTML, CSS, Javascript, React"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Backend Technologies"
            secondary="Django, Nodejs"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Prompt Engineering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Microsoft Office" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Internet Surfing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Supervision" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Presentation" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Leadership" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Planning" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Self-learning" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Technical Communication" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <Typography paragraph>
        I worked part-time as a warranty wing leader in Pro 2 Interactive Ltd.
        from August 2020 to October 2020.
      </Typography>
    </Container>
  );
};

export default About;
