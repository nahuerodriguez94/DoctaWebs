import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid2,
} from "@mui/material";

export const Servicios = () => {
  const productos = [
    { nombre: "Landing Page", imagen: "./landingPage.png" },
    { nombre: "Tienda Web", imagen: "./tiendaWeb.png" },
    { nombre: "Profesionales", imagen: "./profesionales.png" },
  ];

  return (
    <>
 <Box
  id="servicios"
  sx={{
    textAlign: "center",
    mb: { xs: 4, md: 6 }, // margen inferior más pequeño en pantallas chicas
    px: { xs: 2, sm: 4 }, // padding horizontal para no pegarse a los bordes en móviles
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
    Diseñamos tu sitio web a medida
  </Typography>

  <Typography
    variant="h5"
    sx={{
      fontSize: {
        xs: "1rem",
        sm: "1.2rem",
        md: "1.4rem",
      },
      maxWidth: 800,
      margin: "0 auto",
    }}
  >
    En Docta Webs, creamos sitios web modernos, rápidos y optimizados para
    generar resultados. Diseñamos páginas que se adaptan a tus necesidades
    y objetivos.
  </Typography>
</Box>
<Grid2
  container
  spacing={3}
  justifyContent="center"
  sx={{
    px: { xs: 2, sm: 4 }, // padding horizontal para móviles y tablets
  }}
>
  {productos.map((producto, index) => (
    <Grid2
      key={index}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      display="flex"
      justifyContent="center"
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 320,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            src={producto.imagen}
            alt={producto.nombre}
            sx={{
              height: 200,
              width: "100%",
              objectFit: "cover",
              filter: "brightness(0.9)",
              transition: "filter 0.3s",
              "&:hover": {
                filter: "brightness(1.1)",
              },
            }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              {producto.nombre}
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mt: 1 }}>
              {producto.nombre === "Landing Page" &&
                "Diseñadas para captar clientes y aumentar conversiones. Ideales para campañas publicitarias, promociones o lanzamientos de productos."}
              {producto.nombre === "Tienda Web" &&
                "Creamos tiendas online en Tiendanube, listas para vender, con un diseño atractivo, medios de pago integrados y una experiencia de compra optimizada."}
              {producto.nombre === "Profesionales" &&
                "Toda empresa y profesional independiente necesita una web que inspire confianza y refleje su identidad. Creamos sitios empresariales bien estructurados con información clara."}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid2>
  ))}
</Grid2>
    </>
  );
};
