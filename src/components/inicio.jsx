import React, { Suspense, lazy } from 'react';
import Hero from './hero';
import RevealOnScroll from './RevealOnScroll';
import '../styles/inicio.css';

const Carrusel = lazy(() => import('./carrusel'));

function Inicio() {
  return (
    <div className="inicio-container">
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>
      <RevealOnScroll>
        <section className="inicio-about">
          <h2>🔒 Nuestra Misión</h2>
          <p>
            En VicForge, forjamos soluciones tecnológicas a la medida.
            Desarrollamos aplicaciones móviles, software de escritorio y sitios web con la misma pasión con la que fortalecemos la seguridad digital de nuestros clientes.
            Combinamos experiencia, innovación y compromiso para construir tecnología sólida, eficiente y confiable.
          </p>
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <Suspense fallback={<div style={{ padding: 20, minHeight: '200px', background: 'var(--page-bg)' }}>Cargando carrusel...</div>}>
          <Carrusel />
        </Suspense>
      </RevealOnScroll>
    </div>
  );
}

export default Inicio;
