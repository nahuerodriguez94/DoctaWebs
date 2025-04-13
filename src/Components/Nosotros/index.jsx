import React from "react";
import { Typography, Box } from "@mui/material";

export const Nosotros = () => {
  return (
    <Box
      id="nosotros"
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
        En Docta Web, comprendemos la importancia de tener una presencia
        online sólida en el mundo digital actual. Sabemos que cada proyecto es
        único, y por eso nos dedicamos a crear soluciones digitales a medida,
        para que tu negocio se destaque.
      </Typography>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          mt: 2,
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.2rem",
          },
        }}
      >
        ¿Quién Soy?
      </Typography>
      <Typography
        sx={{
          maxWidth: 900,
          mb: 4,
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            md: "1.2rem",
          },
        }}
      >
        Mi nombre es Nahuel Rodriguez y soy el fundador de Docta Webs. Soy
        Desarrollador Web Full Stack (ICARO-UNC) y Licenciado en Gestión
        Publica (UCC). Gracias a esta formacion es que nos permite abordar el
        desarrollo de sitios web con una visión más amplia. Desde la parte
        técnica podemos crear sitios web funcionales y bien estructurados,
        mientras que desde la administración entendemos la importancia de
        organizar y optimizar procesos. Esto me permite crear soluciones
        digitales no solo atractivas, sino también alineadas con los
        objetivos, vision y mision de cada cliente.
      </Typography>
    </Box>
  );
};
