import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 3,
        backgroundColor: "#0e0e1a",
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
        borderTop: "2px solid #ffffff22",
        textAlign: "center",
        fontWeight: 300,
        fontSize: "0.9rem",
      }}
    >
      <Typography>
        &copy; {new Date().getFullYear()} Emin. All rights reserved.
      </Typography>
    </Box>
  );
}