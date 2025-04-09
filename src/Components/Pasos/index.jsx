import React from "react";
import { Typography, Box, Card, CardContent, Grid2 } from "@mui/material";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import CodeIcon from "@mui/icons-material/Code";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Pasos = () => {
  const procesos = [
    {
      icono: <VideoChatIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
      titulo: "Meet",
      descripcion:
        "Agendamos una reunión online para conocerte, escuchar tus ideas y expectativas. A partir de ahí, nos encargamos de todo para hacer realidad tu proyecto.",
    },
    {
      icono: <CodeIcon sx={{ fontSize: 50, color: "#0288d1" }} />,
      titulo: "Desarrollo",
      descripcion:
        "Construimos tu proyecto en etapas, con entregas parciales que garantizan avances constantes. Tu feedback es clave para afinar cada detalle y lograr un resultado óptimo.",
    },
    {
      icono: <CheckCircleIcon sx={{ fontSize: 50, color: "#2e7d32" }} />,
      titulo: "Entrega",
      descripcion:
        "Cuando el proyecto está listo y aprobado, hacemos la entrega final. Si es un sitio web, lo subimos al servidor definitivo con su dominio listo para usarse.",
    },
  ];


  return (
    <Box
      id="como-trabajamos"
      sx={{ width: "100%", textAlign: "center", mt: 5 }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Cómo Trabajamos
      </Typography>
      <Typography
        variant="h6"
        sx={{ maxWidth: "80%", margin: "0 auto", mb: 4 }}
      >
        En DoctaWebs trabajamos en estrecha colaboración con nuestros clientes.
        Nos destacamos por una atención 100% personalizada para lograr que cada
        proyecto sea único, reflejando la personalidad y el estilo de quienes
        nos eligen. Nuestro servicio se compone de 3 etapas:
      </Typography>

      <Grid2
        container
        spacing={2}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Izquierda - Contenido */}
        <Grid2 size={6} >
          {procesos.map((proceso, index) => (
            <Card
              key={index}
              sx={{
                p: 3,
                mb: 2,
                textAlign: "center",
                boxShadow: 3,
                width:"100%"
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  sx={{ mt: 1 }}
                >
                  {proceso.icono}
                  <Typography variant="h5" fontWeight="bold">
                    {proceso.titulo}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {proceso.descripcion}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid2>

        {/* Derecha - Video */}
        <Grid2
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          size={6}
        >
          <Card sx={{ width: "100%", boxShadow: 3 }}>
            <video
              width="100%"
              autoPlay
              muted
              loop
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            >
              <source src="./reunion.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};
