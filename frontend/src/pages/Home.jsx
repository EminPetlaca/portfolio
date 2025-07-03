import React, { useState, useRef, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/NavBar";
import ProjectSection from "../components/ProjectSection";
import "../index.css"; // Ensure gradientShift is defined here
import Technologies from "../components/Technologies";
import About from "../components/About";
import ContactForm from "../components/Form";

export default function Home() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.01,
      vy: (Math.random() - 0.5) * 0.01,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of points) {
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.vx -= dx * 0.00005;
            p.vy -= dy * 0.00005;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = dx * dx + dy * dy;

          if (dist < 120 * 120) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / (120 * 120)})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          fontFamily: '"Inter", sans-serif',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
            backgroundColor: "#0e0e1a",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            px: 2,
            maxWidth: "90%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
              background: "linear-gradient(270deg, #00DBDE, #FC00FF, #00DBDE)",
              backgroundSize: "600% 600%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 20s ease infinite",
              mb: 2,
              whiteSpace: "nowrap",
              minWidth: "fit-content",
              display: "inline-block",
            }}
          >
            {!typingDone ? (
              <Typewriter
                words={["Hi, I'm Emin"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={0}
                delaySpeed={1000}
                onLoopDone={() => setTypingDone(true)}
              />
            ) : (
              "Hi, I'm Emin"
            )}
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 200, mb: 4 }}>
            I build clean, modern web experiences.
          </Typography>

          <button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "999px",
              padding: "14px 36px",
              fontSize: "1.05rem",
              fontWeight: 500,
              letterSpacing: "0.5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              textTransform: "uppercase",
              boxShadow: "0 4px 16px rgba(255, 255, 255, 0.05)",
            }}
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me
          </button>
        </Box>

        {/* ↓ Arrow at bottom */}
        <div
          onClick={scrollToProjects}
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 21c-.3 0-.5-.1-.7-.3l-10-10 1.4-1.4L12 18.6 21.3 9.3l1.4 1.4-10 10c-.2.2-.4.3-.7.3z" />
          </svg>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" style={{ scrollMarginTop: "50px" }}>
        <ProjectSection />
      </div>
      <Technologies />
      <About />
      <ContactForm/>
    </>
  );
}
