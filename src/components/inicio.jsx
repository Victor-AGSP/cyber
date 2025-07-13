import React from 'react';
import Hero from './hero';
import Carrusel from './carrusel';
import '../styles/inicio.css';

function Inicio() {
  return (
    <div className="inicio-container">
      <Hero />
      <section className="inicio-about">
        <h2>🔒 Nuestra Misión</h2>
        <p>
          Protegemos tus activos digitales con pruebas de seguridad, auditorías y consultoría 
          de ciberseguridad de primer nivel. Nuestro equipo combina experiencia y tecnología 
          para blindar tu empresa frente a amenazas reales.
        </p>
      </section>
      <Carrusel />
    </div>
  );
}

export default Inicio;
