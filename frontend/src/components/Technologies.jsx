import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";

const technologies = [
  "React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript",
  "HTML", "CSS", "MUI", "Tailwind", "Git", "Firebase", "Vite", "Next.js"
];

export default function Technologies() {
  return (
    <Box
      sx={{
        py: 10, // Increased vertical padding
        borderTop: "2px solid #ffffff22",
        borderBottom: "2px solid #ffffff22",
        backgroundColor: "transparent",
        color: "white",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <Typography
        variant="h4" // Changed from h5 to h4 for larger size
        sx={{
          textAlign: "center",
          mb: 6, // Increased bottom margin
          mt: 2,
          fontWeight: "bold",
          letterSpacing: 1,
          background: "linear-gradient(270deg, #00DBDE, #FC00FF, #00DBDE)",
          backgroundSize: "600% 600%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 20s ease infinite",
        }}
      >
        Technologies I Use
      </Typography>

      <Marquee gradient={false} speed={50}>
        {technologies.map((tech, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-block",
              mx: 3,
              px: 2,
              py: 1,
              border: "1px solid #00f6ff44",
              borderRadius: "999px",
              backgroundColor: "rgba(0, 255, 255, 0.05)",
              fontSize: "1rem",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {tech}
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
