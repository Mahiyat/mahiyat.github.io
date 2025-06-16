import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, LinearProgress, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  School, 
  EmojiEvents, 
  Code, 
  Psychology,
  TrendingUp,
  Language,
  StarRate,
  WorkspacePremium
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  borderRadius: '20px',
  padding: '20px',
  height: '100%',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  marginBottom: '20px',
  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
}));

const SkillProgress = styled(Box)(({ theme }) => ({
  marginBottom: '16px',
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  backgroundColor: 'rgba(102, 126, 234, 0.1)',
  '& .MuiLinearProgress-bar': {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 5,
  },
}));

const AchievementChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  color: 'white',
  fontWeight: 600,
  margin: '4px',
  boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease',
}));

const skills = [
  { name: 'Python', level: 95 },
  { name: 'C++', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'React.js', level: 85 },
  { name: 'Django', level: 80 },
  { name: 'Node.js', level: 78 },
  { name: 'Machine Learning', level: 82 },
];

const achievements = [
  '4th Runner Up - Techgig Geek Goddess 2022',
  '4th Place - Ada Lovelace Contest 2022',
  '5th Place - Luna Shamsuddoha Contest 2023',
  'Code Samurai 2024 Finalist',
  'Published Research in Q1 Journal',
  'ICPC Participant',
];

const About = () => {
  return (
    <Container
      id="about"
      maxWidth="xl"
      sx={{ 
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
      }}
    >
      <Box textAlign="center" sx={{ marginBottom: 6 }}>
        <Typography 
          variant="h3" 
          component="h2"
          sx={{ 
            fontWeight: 700,
            marginBottom: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#666', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          Passionate Computer Science student with a stellar academic record and proven track record 
          in competitive programming, research, and software development.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <IconWrapper>
              <School fontSize="large" />
            </IconWrapper>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2 }}>
              Academic Excellence
            </Typography>
            <Typography sx={{ marginBottom: 2, color: '#555', lineHeight: 1.7 }}>
              Currently pursuing B.Sc. in Computer Science and Engineering at Jahangirnagar University 
              with an outstanding CGPA of 3.99/4.00. Dedicated to maintaining academic excellence while 
              actively participating in research and competitive programming.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <StarRate sx={{ color: '#f5576c' }} />
              <Typography sx={{ fontWeight: 600, color: '#667eea' }}>
                CGPA: 3.99/4.00
              </Typography>
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledCard>
            <IconWrapper>
              <Code fontSize="large" />
            </IconWrapper>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2 }}>
              Technical Skills
            </Typography>
            <Typography sx={{ marginBottom: 3, color: '#555', lineHeight: 1.7 }}>
              Proficient in multiple programming languages and frameworks with hands-on experience 
              in full-stack development, machine learning, and mobile app development.
            </Typography>
            <Box>
              {skills.slice(0, 4).map((skill, index) => (
                <SkillProgress key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#667eea', fontWeight: 600 }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <StyledLinearProgress variant="determinate" value={skill.level} />
                </SkillProgress>
              ))}
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledCard>
            <IconWrapper>
              <EmojiEvents fontSize="large" />
            </IconWrapper>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2 }}>
              Achievements & Awards
            </Typography>
            <Typography sx={{ marginBottom: 3, color: '#555', lineHeight: 1.7 }}>
              Consistent performer in national and international programming contests with multiple 
              awards and recognitions in competitive programming and research.
            </Typography>
            <Box>
              {achievements.map((achievement, index) => (
                <AchievementChip 
                  key={index}
                  label={achievement}
                  size="small"
                />
              ))}
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledCard>
            <IconWrapper>
              <Psychology fontSize="large" />
            </IconWrapper>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2 }}>
              Research & Innovation
            </Typography>
            <Typography sx={{ marginBottom: 2, color: '#555', lineHeight: 1.7 }}>
              Published researcher with expertise in machine learning applications for climate science. 
              Currently working on AI-powered educational tools and outcome-based education systems.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
              <WorkspacePremium sx={{ color: '#f5576c' }} />
              <Typography sx={{ fontWeight: 600, color: '#667eea' }}>
                Q1 Journal Publication
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#555', fontStyle: 'italic' }}>
              "Thunderstorm Forecasting using Machine Learning Techniques" - International Journal of Climatology
            </Typography>
          </StyledCard>
        </Grid>
      </Grid>

      {/* <Box sx={{ marginTop: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 3 }}>
          Core Competencies
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <SkillProgress>
                <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 1, color: 'black' }}>
                  {skill.name}
                </Typography>
                <StyledLinearProgress variant="determinate" value={skill.level} />
                <Typography variant="caption" sx={{ color: '#667eea', fontWeight: 600 }}>
                  {skill.level}%
                </Typography>
              </SkillProgress>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Container>
  );
};

export default About;
