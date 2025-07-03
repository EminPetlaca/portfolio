import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your submit logic here
  };

  return (
    <Box
      id="contact"
      sx={{
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 3,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          mx: "auto",
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            textAlign: "center",
            fontWeight: "bold",
            background: "linear-gradient(270deg, #00DBDE, #FC00FF, #00DBDE)",
            backgroundSize: "600% 600%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 20s ease infinite",
          }}
        >
          Contact Me
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            sx={textFieldStyles}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            sx={textFieldStyles}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            sx={textFieldStyles}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "999px",
              padding: "14px 0",
              fontSize: "1.05rem",
              fontWeight: 500,
              letterSpacing: "0.5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              textTransform: "uppercase",
              boxShadow: "0 4px 16px rgba(255, 255, 255, 0.05)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

const textFieldStyles = {
  mb: 2,
  input: {
    color: "#fff",
    backgroundColor: "transparent",
  },
  textarea: {
    color: "#fff",
    backgroundColor: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "&:hover fieldset": {
      borderColor: "#FC00FF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00DBDE",
    },
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px rgba(255, 255, 255, 0.05) inset",
    WebkitTextFillColor: "#fff",
    transition: "background-color 5000s ease-in-out 0s",
  },
};
