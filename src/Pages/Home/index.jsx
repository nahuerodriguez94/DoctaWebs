import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Portada } from "../../Components/Portada";
import { Servicios } from "../../Components/Servicios";
import { Pasos } from "../../Components/Pasos";
import { Nosotros } from "../../Components/Nosotros";
import { Preguntas } from "../../Components/Preguntas";
import { BtnWhatsApp } from "../../Button";
import { FormularioContacto } from "../../Components/Contacto";
import { Footer } from "../../Components/Footer";

export const Home = () => {
  return (
    <>
     
        <Navbar></Navbar>
        <Portada></Portada>
        <Servicios></Servicios>
        <Pasos></Pasos>
        <Nosotros></Nosotros>
        <Preguntas></Preguntas>
        <FormularioContacto></FormularioContacto>
        <BtnWhatsApp> </BtnWhatsApp>
        <Footer></Footer>
    </>
  );
};
