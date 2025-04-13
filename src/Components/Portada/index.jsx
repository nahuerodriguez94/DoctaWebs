import React from "react";
import { Typography, Button } from "@mui/material";

export const Portada = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxHeight: "20%",
          padding: 0,
          marginTop: 0,
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/portada.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        {/* Texto centrado sobre el video */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
              },
              textAlign: "center",
              mt: {
                xs: 10,
                sm: 8,
                md: 6,
                lg: 4,
              },
            }}
          >
            Docta Webs
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "white",
              textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
              textAlign: "center",
              fontStyle: "italic",
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.5rem",
              },
              mt: 2,
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            Donde tus ideas se hacen realidad
          </Typography>

          <a
            href="https://wa.me/543512662981"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                fontWeight: "bold",
                px: 2,
                py: 1,
                fontSize: {
                  xs: "0.5rem",
                  sm: "1rem",
                },
                borderRadius: "20px",
                textTransform: "none",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.4)",
                "&:hover": {
                  backgroundColor: "#1ebc59",
                },
              }}
            >
              Solicitá tu presupuesto
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};
