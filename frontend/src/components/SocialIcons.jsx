import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function SocialIcons() {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 20,
        top: 20,
        display: 'flex',
        flexDirection: 'row', // horizontal
        gap: 2,
        zIndex: 1500,
      }}
    >
      <IconButton
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'white',
          transition: 'color 0.3s',
          '&:hover': { color: '#E1306C' }, // Instagram pink
        }}
      >
        <InstagramIcon fontSize="medium" />
      </IconButton>

      <IconButton
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'white',
          transition: 'color 0.3s',
          '&:hover': { color: '#4078c0' }, // GitHub blue
        }}
      >
        <GitHubIcon fontSize="medium" />
      </IconButton>

      <IconButton
        href="mailto:youremail@example.com"
        sx={{
          color: 'white',
          transition: 'color 0.3s',
          '&:hover': { color: '#EA4335' }, // Gmail red
        }}
      >
        <EmailIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
}
