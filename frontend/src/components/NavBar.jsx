import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

// --- Navigation Items ---
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

// --- Navbar Component ---
export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => setMenuOpen((prev) => !prev);

  const fontFamily = '"Inter", sans-serif';

  // --- Hamburger Button (No Padding) ---
  const AnimatedHamburgerButton = ({ isOpen, toggle }) => {
    const barStyle = {
      position: 'absolute',
      width: 24,
      height: 2,
      backgroundColor: 'white',
      borderRadius: 2,
      left: '50%',
      transform: 'translateX(-50%)',
    };

    return (
      <Box
        onClick={toggle}
        sx={{
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          p: 0,
          m: 0,
          minWidth: 0,
          minHeight: 0,
        }}
      >
        <motion.span
          style={{ ...barStyle }}
          animate={isOpen ? { rotate: 45, top: '50%' } : { rotate: 0, top: 12 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          style={{ ...barStyle }}
          animate={{
            opacity: isOpen ? 0 : 1,
            top: '50%',
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          style={{ ...barStyle }}
          animate={isOpen ? { rotate: -45, top: '50%' } : { rotate: 0, top: 28 }}
          transition={{ duration: 0.3 }}
        />
      </Box>
    );
  };

  return (
    <>
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
          zIndex: 1300,
          fontFamily,
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: 'unset' }}>
          {isMobile ? (
            <AnimatedHamburgerButton isOpen={menuOpen} toggle={toggleDrawer} />
          ) : (
            <Box display="flex" alignItems="center" gap={3}>
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
                        background:
                          'radial-gradient(circle, rgba(0,246,255,0.15), transparent)',
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
                        fontWeight: 400,
                        fontSize: '1rem',
                        textTransform: 'none',
                        px: 2.5,
                        py: 1,
                        fontFamily,
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
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(14, 14, 26, 0.95)',
            backdropFilter: 'blur(8px)',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            width: '70vw',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
      >
        <List>
          {navItems.map(({ label, path }) => (
            <ListItem
              key={label}
              button
              component={Link}
              to={path}
              onClick={toggleDrawer}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: location.pathname === path ? '#00f6ff' : '#fff',
                  fontFamily,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
