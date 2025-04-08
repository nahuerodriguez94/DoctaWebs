// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C63FF', // Púrpura moderno
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3F3D56', // Azul oscuro
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F8F8', // Gris muy claro (para fondo)
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333', // Texto oscuro
      secondary: '#555555', // Un tono más suave si necesitás
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
