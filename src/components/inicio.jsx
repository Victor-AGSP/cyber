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
          En VicForge, forjamos soluciones tecnológicas a la medida.
          Desarrollamos aplicaciones móviles, software de escritorio y sitios web con la misma pasión con la que fortalecemos la seguridad digital de nuestros clientes.
          Combinamos experiencia, innovación y compromiso para construir tecnología sólida, eficiente y confiable.
        </p>
      </section>
      <Carrusel />
    </div>
  );
}

export default Inicio;
