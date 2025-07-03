import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: "#0e0e1a",
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
        borderTop: "2px solid #ffffff22",
        borderBottom: "2px solid #ffffff22", // <-- bolder & slightly more opaque
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 6,
          fontWeight: 600,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        About Me
      </Typography>

      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Avatar
            alt="Emin"
            src="https://via.placeholder.com/200" // Replace with your image
            sx={{
              width: 180,
              height: 180,
              margin: "0 auto",
              border: "4px solid #00f6ff33",
              boxShadow: "0 4px 20px rgba(0, 255, 255, 0.15)",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              color: "#cccccc",
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
              fontWeight: 300,
              lineHeight: 1.9,
              letterSpacing: "0.3px",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            I'm Emin, a passionate web developer focused on building clean,
            fast, and responsive digital experiences. I specialize in modern
            frontend frameworks like
            <strong> React</strong> and backend tools like{" "}
            <strong>Node.js</strong>, creating seamless user interfaces and
            scalable web applications.
            <br />
            <br />I constantly seek new challenges and enjoy pushing the
            boundaries of what's possible on the web — always learning,
            building, and refining.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
