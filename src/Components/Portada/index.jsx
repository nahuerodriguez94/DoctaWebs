import React from "react";
import { Typography } from "@mui/material";

export const Portada = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxHeight: "20%", // altura del alto de la pantalla
          padding: 0,
          margin: 0,
          overflow: "hidden", // evita scroll por exceso de video
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
            }}
          >
            Docta Webs
          </Typography>
        </div>
      </div>
    </>
  );
};
