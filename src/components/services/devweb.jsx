import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import '../../styles/service.css';

const DesarrolloPaginasWeb = () => {
  return (
    <RevealOnScroll>
      <section className="services format-section">
      <h2 className="services-title">💻 Desarrollo de Páginas Web</h2>
      <p className="service-intro">
        Creamos sitios web modernos, rápidos y seguros, adaptados a las necesidades de tu negocio, optimizados para SEO y con experiencia de usuario superior.
      </p>

      <RevealOnScroll stagger staggerDelay={100}>
        <div className="services-grid">
          <div className="service-card">
          <h3 className="service-title">Características principales</h3>
          <ul className="service-list">
            <li>Diseño responsive para móviles, tablets y escritorio.</li>
            <li>Optimización de velocidad y rendimiento web.</li>
            <li>Integración de sistemas de pago y formularios seguros.</li>
            <li>Implementación de SEO básico y buenas prácticas web.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">Beneficios</h3>
          <ul className="service-list">
            <li>Incremento de visibilidad online.</li>
            <li>Experiencia de usuario mejorada y profesional.</li>
            <li>Mantenimiento y escalabilidad a largo plazo.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">Resultados esperados</h3>
          <ul className="service-list">
            <li>Sitio web seguro y estable.</li>
            <li>Mayor interacción de usuarios y clientes potenciales.</li>
            <li>Base sólida para futuras expansiones digitales.</li>
          </ul>
        </div>
        </div>
      </RevealOnScroll>
      </section>
    </RevealOnScroll>
  );
};

export default DesarrolloPaginasWeb;
