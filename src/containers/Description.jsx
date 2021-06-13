import React from "react";
import '../assets/styles/containers/Description.scss'

const Description = () => {
  return(
  <section className="description-section" style={{
    background: `url(${process.env.PUBLIC_URL + '/background.png'})`
  }}>
    <div className="filter">
    <div className="figures"></div>
    <p className="description">Nuwe es la platforma que convierte el desarrollo profesional, la búsquda de trabajo y la conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</p>
    </div>
    
  </section>
  );
};

export default Description;
