import React from "react";
import {
  Typography,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// Estilos personalizados
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  borderRadius: "12px",
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[2],
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: "12px",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export const Preguntas = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Preguntas Frecuentes
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Respondemos tus dudas más comunes sobre el servicio de desarrollo web
        </Typography>
      </Box>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography fontWeight="500">
            ¿Qué incluye el servicio de desarrollo web?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Incluye el diseño y desarrollo de una página web personalizada,
            adaptable a dispositivos móviles (responsive), optimizada para
            buscadores (SEO básico), integración con redes sociales, y
            formularios de contacto. También se puede incluir una tienda online
            o blog según lo que necesites.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography fontWeight="500">
            ¿Cuánto tiempo tarda en estar lista mi página web?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Una página institucional básica puede estar lista en 1 a 2 semanas.
            Sitios más complejos como e-commerce pueden tardar entre 3 y 4
            semanas, dependiendo del contenido y funcionalidades.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          <Typography fontWeight="500">
            ¿Tengo que pagar un mantenimiento mensual?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No es obligatorio, pero sí recomendable. Ofrezco planes opcionales
            con soporte, respaldo, actualizaciones y cambios menores. También
            podés manejarlo por tu cuenta si preferís.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4-content" id="panel4-header">
          <Typography fontWeight="500">
            ¿Necesito tener conocimientos técnicos para tener una página web?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, me encargo de todo el proceso. Además, te entrego una guía para
            administrar tu sitio y, si lo necesitás, una capacitación
            personalizada.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5-content" id="panel5-header">
          <Typography fontWeight="500">¿Qué necesito para empezar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Solo necesitás contarme tu idea. Yo te pediré algunos contenidos
            como textos, imágenes y datos de contacto. Si no los tenés, también
            puedo ayudarte a generarlos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
