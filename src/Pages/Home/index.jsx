import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Portada } from "../../Components/Portada";
import { Servicios } from "../../Components/Servicios";
import { Pasos } from "../../Components/Pasos";
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
        <FormularioContacto></FormularioContacto>
        <Preguntas></Preguntas>
        <BtnWhatsApp> </BtnWhatsApp>
        <Footer></Footer>
    </>
  );
};
