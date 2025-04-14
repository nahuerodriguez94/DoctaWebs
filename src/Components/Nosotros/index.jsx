import React from "react";
import { Typography, Box } from "@mui/material";

export const Nosotros = () => {
  return (
    <Box
      id="sobre-nosotros"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.8rem",
            sm: "2.4rem",
            md: "3rem",
          },
        }}
      >
        Sobre Nosotros
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: 900,
          margin: "0 auto",
          mb: 4,
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            md: "1.2rem",
          },
        }}
      >
        Docta Webs fue fundada en Córdoba Capital, Argentina, con el objetivo de
        brindar soluciones digitales accesibles y efectivas. Somos un equipo de
        profesionales especializados en Desarrollo Web Full Stack y Administración, comprometidos con el crecimiento y la visibilidad de
        cada organización, emprendimiento o empresa. Entendemos que estar
        presente en internet hoy no es una opción, sino una necesidad. Tu sitio
        web es la puerta de entrada a nuevas oportunidades, clientes y alianzas.
        Por eso, diseñamos sitios modernos, funcionales y personalizados que
        reflejan la identidad de cada proyecto y lo conectan con el mundo
        digital de forma clara, profesional y estratégica.
      </Typography>
    </Box>
  );
};
