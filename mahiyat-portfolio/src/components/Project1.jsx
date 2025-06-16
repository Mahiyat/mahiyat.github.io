import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  GitHub,
  Launch,
  Close,
  Code,
  Storage,
  Psychology,
  School,
  Analytics,
  SmartToy,
  Web,
  Phone,
  MenuBook,
} from "@mui/icons-material";

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
  border: "1px solid rgba(102, 126, 234, 0.1)",
  borderRadius: "20px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(102, 126, 234, 0.15)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  fontWeight: 600,
  margin: "4px 4px 4px 0",
  fontSize: "0.75rem",
  height: "24px",
  "&:hover": {
    transform: "scale(1.05)",
  },
  transition: "all 0.3s ease",
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  padding: "8px 20px",
  fontWeight: 600,
  textTransform: "none",
  margin: "4px",
  transition: "all 0.3s ease",
}));

const PrimaryButton = styled(ActionButton)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  border: "none",
  "&:hover": {
    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
  },
}));

const SecondaryButton = styled(ActionButton)(({ theme }) => ({
  background: "transparent",
  color: "#667eea",
  border: "2px solid #667eea",
  "&:hover": {
    background: "#667eea",
    color: "white",
    transform: "translateY(-2px)",
  },
}));

const projects = [
  {
    id: 1,
    title: "OBE Result Analysis System",
    subtitle: "AI-Powered Educational Analytics Platform",
    description:
      "A comprehensive web platform for managing and analyzing outcome-based education results with real-time data processing and AI-based interpretation.",
    fullDescription:
      "This system revolutionizes how educational institutions handle outcome-based education (OBE) assessment. Built with Django backend and React frontend, it provides real-time data fetching from SQL databases and incorporates Llama3.2 for intelligent student result interpretation. The platform offers detailed analytics, progress tracking, and automated report generation.",
    image: "/api/placeholder/400/250",
    technologies: [
      "Django",
      "React",
      "SQL",
      "Llama3.2",
      "Python",
      "JavaScript",
    ],
    features: [
      "Real-time data processing from SQL databases",
      "AI-powered result interpretation using Llama3.2",
      "Interactive dashboard with comprehensive analytics",
      "Automated report generation and export",
      "Role-based access control for different user types",
      "Responsive design for all devices",
    ],
    githubUrl: "https://github.com/Mahiyat/obe-project-result-analysis",
    category: "Web Development",
    status: "Ongoing",
    icon: <Analytics />,
  },
  {
    id: 2,
    title: "OBE Mobile App",
    subtitle: "Mobile Companion for Educational Analytics",
    description:
      "Mobile application version of the OBE platform built with Kotlin, featuring Firebase authentication and real-time data synchronization.",
    fullDescription:
      "The mobile companion app extends the OBE Result Analysis System to mobile devices. Built with Kotlin for Android, it integrates Firebase for seamless single sign-on and real-time data synchronization. Students and educators can access their data, view analytics, and receive notifications on-the-go.",
    image: "/api/placeholder/400/250",
    technologies: ["Kotlin", "Firebase", "Android", "SQL", "Real-time DB"],
    features: [
      "Firebase SSO integration for secure authentication",
      "Real-time data synchronization across devices",
      "Offline mode with data caching",
      "Push notifications for important updates",
      "Intuitive mobile-first UI/UX design",
      "Cross-platform data consistency",
    ],
    githubUrl: "https://github.com/Mahiyat/obe-result-analysis-mobile-app",
    category: "Mobile Development",
    status: "Ongoing",
    icon: <Phone />,
  },
  {
    id: 3,
    title: "Academia Task Management",
    subtitle: "AI-Enhanced Academic Workflow System",
    description:
      "Visual course activity tracker with drag-and-drop boards, built with React, Node.js, and MongoDB, featuring AI workflow suggestions.",
    fullDescription:
      "A sophisticated task management system designed specifically for academic environments. Features intuitive drag-and-drop Kanban boards for visual project tracking, integrated with AI-powered workflow suggestions using Llama3.2. The system helps students and educators organize coursework, assignments, and research projects efficiently.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Llama3.2",
      "Express",
      "Socket.io",
    ],
    features: [
      "Drag-and-drop Kanban boards for visual task management",
      "AI-powered workflow suggestions and optimization",
      "Real-time collaboration with multiple users",
      "Automated deadline tracking and notifications",
      "Integration with calendar systems",
      "Advanced filtering and search capabilities",
    ],
    githubUrl: "https://github.com/Mahiyat/academia-task-management",
    category: "Web Development",
    status: "Ongoing",
    icon: <School />,
  },
  {
    id: 4,
    title: "Open WebUI with Ollama",
    subtitle: "AI-Powered Interface with Multi-Modal Capabilities",
    description:
      "Comprehensive AI interface setup with Docker, featuring Stable Diffusion for image generation and SearXNG for web search integration.",
    fullDescription:
      "A complete AI interface solution that bundles Open WebUI with Ollama using Docker containers. The system integrates Stable Diffusion for high-quality image generation and SearXNG for enhanced web search capabilities, creating a unified AI-powered workspace for various creative and research tasks.",
    image: "/api/placeholder/400/250",
    technologies: [
      "Docker",
      "Ollama",
      "Stable Diffusion",
      "SearXNG",
      "Python",
      "WebUI",
    ],
    features: [
      "Containerized deployment with Docker for easy setup",
      "Stable Diffusion integration for image generation",
      "SearXNG web search for enhanced information retrieval",
      "Multiple AI model support through Ollama",
      "User-friendly web interface for all functionalities",
      "Scalable architecture for high-performance computing",
    ],
    githubUrl: "https://github.com/Mahiyat/open-webui-shell-script",
    category: "AI/ML",
    status: "Completed",
    icon: <SmartToy />,
  },
  {
    id: 5,
    title: "JU-CSE BSc Course Information System", 
    subtitle: "Course Management System with Natural Language Interface and Intelligent Database Operations",
    description:
      "An AI-powered course management system with natural language interface for managing university course information using MongoDB MCP server and Ollama integration. Gemini integration to be added soon.",
    fullDescription:
      "A comprehensive course management system built with AI agents, MongoDB, and Ollama integration. The system provides an intelligent interface for managing course information through natural language queries, enabling users to perform CRUD operations using plain English commands. Features include a web-based Gradio UI, MongoDB backend for data persistence, and llama3.2 model for intelligent query processing. The containerized architecture ensures easy deployment and scalability, making it perfect for educational institutions looking to modernize their course management workflows.",
    image: "/api/placeholder/400/250",
    technologies: [
      "Python",
      "MongoDB",
      "Docker",
      "Ollama",
      "LLaMA 3.2",
      "Gradio",
      "FastMCP",
      "PyMongo",
      "PraisonAI Agents",
      "LiteLLM",
      "Docker Compose",
      "NVIDIA GPU",
    ],
    features: [
      "Natural Language Interface for database queries",
      "AI-powered course information management",
      "CRUD operations with conversational commands",
      "Web-based user interface with Gradio",
      "MongoDB integration for data persistence",
      "Local LLM processing with Ollama",
      "Containerized microservices architecture",
      "Real-time course data management",
      "GPU-accelerated AI processing",
      "RESTful API endpoints",
      "Automatic model deployment and management",
      "Multi-service Docker orchestration",
    ],
    githubUrl: "https://github.com/Mahiyat/mongo-mcp",
    category: "AI/ML",
    status: "Ongoing",
    icon: <MenuBook />,
  },
  {
    id: 6,
    title: "Thunderstorm Forecasting Research",
    subtitle: "Machine Learning for Climate Prediction",
    description:
      "Published research on thunderstorm forecasting using machine learning techniques, leveraging historic climate records of Bangladesh.",
    fullDescription:
      "A comprehensive research project published in the Q1 journal International Journal of Climatology. The study implements various machine learning algorithms to predict thunderstorm occurrences using historical climate data from Bangladesh. This research contributes to better weather prediction systems and climate understanding in the region.",
    image: "/api/placeholder/400/250",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
    ],
    features: [
      "Comparative analysis of multiple ML algorithms",
      "Historical climate data processing and analysis",
      "Statistical model validation and testing",
      "Published in Q1 international journal",
      "Real-world application for weather prediction",
      "Contribution to climate science research",
    ],
    githubUrl: "#",
    liveUrl: "https://doi.org/10.1002/joc.8853",
    category: "Research",
    status: "Published",
    icon: <Psychology />,
  },
];

export default function Project1() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ padding: { xs: 2, sm: 3, md: 4 } }}
      >
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard onClick={() => handleCardClick(project)}>
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: { xs: 140, sm: 160, md: 180 },
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  }}
                >
                  {project.icon}
                </CardMedia>
                <Chip
                  label={project.status}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background:
                      project.status === "Published"
                        ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                        : project.status === "Ongoing"
                        ? "linear-gradient(135deg,rgb(248, 216, 111) 0%, #fab1a0 100%)"
                        : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    color: "white",
                    fontWeight: 600,
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  padding: { xs: "16px", sm: "18px", md: "20px" }, // Reduce padding
                  minHeight: "280px", // Set minimum height for consistency
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, marginBottom: 1 }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#667eea", fontWeight: 500, marginBottom: 2 }}
                >
                  {project.subtitle}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#666", marginBottom: 3, lineHeight: 1.6 }}
                >
                  {project.description}
                </Typography>

                <Box
                  sx={{ marginBottom: 2, display: "flex", flexWrap: "wrap" }}
                >
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <StyledChip key={index} label={tech} size="small" />
                  ))}
                  {project.technologies.length > 3 && (
                    <StyledChip
                      label={`+${project.technologies.length - 3} more`}
                      size="small"
                      sx={{ opacity: 0.8 }}
                    />
                  )}
                </Box>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <PrimaryButton
                    size="small"
                    startIcon={<Launch />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(project);
                    }}
                  >
                    View Details
                  </PrimaryButton>

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <SecondaryButton
                      size="small"
                      startIcon={<GitHub />}
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </SecondaryButton>
                  )}
                </Box>
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>

      {/* Project Detail Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: 1,
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {selectedProject.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#667eea", fontWeight: 500 }}
                >
                  {selectedProject.subtitle}
                </Typography>
              </Box>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.7, color: "#555" }}
                >
                  {selectedProject.fullDescription}
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Technologies Used
              </Typography>
              <Box sx={{ mb: 3, display: "flex", flexWrap: "wrap" }}>
                {selectedProject.technologies.map((tech, index) => (
                  <StyledChip key={index} label={tech} />
                ))}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Key Features
              </Typography>
              <List dense>
                {selectedProject.features.map((feature, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: { color: "#555", lineHeight: 1.6 },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </DialogContent>

            <DialogActions sx={{ p: 3, pt: 1 }}>
              {selectedProject.githubUrl &&
                selectedProject.githubUrl !== "#" && (
                  <PrimaryButton
                    startIcon={<GitHub />}
                    component="a"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </PrimaryButton>
                )}

              {selectedProject.liveUrl && (
                <PrimaryButton
                  startIcon={<Launch />}
                  component="a"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication
                </PrimaryButton>
              )}

              <SecondaryButton onClick={handleClose}>Close</SecondaryButton>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
