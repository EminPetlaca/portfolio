import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        px: 2,
        py: 0.5,
        width: 'fit-content',
        zIndex: 2000,
        fontFamily: '"Space Grotesk", sans-serif',
      }}
    >
      <Toolbar disableGutters>
        <Box display="flex" gap={2}>
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;

            return (
              <motion.div
                key={path}
                whileHover={{ scale: 1.05 }}
                style={{
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle, rgba(0,246,255,0.15), transparent)',
                    zIndex: 0,
                    filter: 'blur(8px)',
                    borderRadius: '12px',
                  }}
                />
                <Button
                  component={Link}
                  to={path}
                  disableRipple
                  sx={{
                    color: isActive ? '#00f6ff' : '#fff',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    fontFamily: '"Space Grotesk", sans-serif',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#00f6ff',
                    },
                  }}
                >
                  {label}
                </Button>
              </motion.div>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
