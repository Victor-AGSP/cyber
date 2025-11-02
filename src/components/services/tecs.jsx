import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import '../../styles/service.css';

const SoporteTecnico = () => {
  return (
    <RevealOnScroll>
      <section className="services format-section">
        <h2 className="services-title">🛠️ Soporte Técnico</h2>
        <p className="service-intro">
          Brindamos soporte técnico remoto y presencial para resolver problemas, optimizar sistemas y mantener la infraestructura digital segura y eficiente.
        </p>

        <RevealOnScroll stagger staggerDelay={100}>
          <div className="services-grid">
            <div className="service-card">
            <h3 className="service-title">Servicios principales</h3>
            <ul className="service-list">
              <li>Resolución de problemas de hardware y software.</li>
              <li>Instalación y actualización de sistemas y aplicaciones.</li>
              <li>Mantenimiento preventivo y optimización de rendimiento.</li>
              <li>Soporte remoto rápido y confiable.</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-title">Beneficios</h3>
            <ul className="service-list">
              <li>Reducción de tiempos de inactividad.</li>
              <li>Operación más eficiente y estable de los sistemas.</li>
              <li>Atención profesional y personalizada.</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-title">Resultados esperados</h3>
            <ul className="service-list">
              <li>Solución rápida y segura de incidencias técnicas.</li>
              <li>Sistemas protegidos y optimizados.</li>
              <li>Mayor productividad y tranquilidad para tu empresa.</li>
            </ul>
          </div>
          </div>
        </RevealOnScroll>
      </section>
    </RevealOnScroll>
  );
};

export default SoporteTecnico;
