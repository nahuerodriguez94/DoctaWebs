import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const BtnWhatsApp = () => {
  const mensaje = "Buenos días Docta Web!";
  const numero = "543512662981";

  return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        zIndex: 1000,
        textDecoration: 'none',
      }}
    >
      <WhatsAppIcon style={{ fontSize: 35 }} />
    </a>
  );
};
