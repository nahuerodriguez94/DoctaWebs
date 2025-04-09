import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll"; // 👈 Importar react-scroll

const pages = [
  { name: "Servicios", id: "servicios" },
  { name: "Cómo Trabajamos", id: "como-trabajamos" },
  { name: "Preguntas Frecuentes", id: "preguntas-frecuentes" },
  { name: "Contacto", id: "contacto" },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#6C63FF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo escritorio */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", mr: 2 }}>
            <a href="#">
              <img
                src="./logo.png"
                alt="Logo"
                style={{
                  height: 60,
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>
          </Box>

          {/* Menú móvil */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 0 }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo mobile */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <a href="#">
              <img
                src="./logo.png"
                alt="Logo"
                style={{
                  height: 60,
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>
          </Box>

          {/* Menú escritorio */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.id}
                to={page.id}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
