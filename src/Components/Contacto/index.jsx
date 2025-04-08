import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export const FormularioContacto = () => {
  const [exito, setExito] = useState(false);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 20, marginBottom: 30 }}>
      <Typography variant="h4" gutterBottom>Contáctanos</Typography>

      {/* Formulario enviado con FormSubmit */}
      <Box
        component="form"
        action="https://formsubmit.co/mna.rodriguez94@gmail.com"
        method="POST"
        onSubmit={() => setExito(true)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          name="correo"
          type="email"
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="mensaje"
          required
          multiline
          rows={4}
          margin="normal"
        />

        {/* Opcional: Redirección después del envío */}
        <input type="hidden" name="_next" value="http://localhost:5173/gracias" />
        <input type="hidden" name="_captcha" value="false" />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Enviar Mensaje
        </Button>
        {exito && (
          <Typography color="green" sx={{ mt: 2 }}>
            ¡Mensaje enviado exitosamente!
          </Typography>
        )}
      </Box>
    </Container>
  );
};
