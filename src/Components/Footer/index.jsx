import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121",
        color: "white",
        py: 4,
        px: 2,
        mt: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Docta Webs
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Desarrollo web profesional para emprendedores y empresas.
      </Typography>

      <Typography variant="caption" display="block" sx={{ mt: 3, opacity: 0.7 }}>
        © {new Date().getFullYear()} Docta Webs. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};
