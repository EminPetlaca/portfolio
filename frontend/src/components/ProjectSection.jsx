import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, animated portfolio built with React and Material UI.",
    image: "https://via.placeholder.com/400x250?text=Portfolio",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack MERN e-commerce app with payment and admin dashboard.",
    image: "https://via.placeholder.com/400x250?text=E-Commerce",
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Responsive blog platform with Markdown support and user login.",
    image: "https://via.placeholder.com/400x250?text=Blog+Platform",
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: "#0e0e1a",
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
        borderTop: "2px solid #ffffff22", // subtle white border
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 5,
          fontWeight: 600,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Featured Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#1a1a2e",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 6px 40px rgba(0, 255, 255, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ color: "#fff" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                  {project.description}
                </Typography>
              </CardContent>
              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#00f6ff",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 2,
                  mb: 2,
                }}
              >
                View Project →
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
