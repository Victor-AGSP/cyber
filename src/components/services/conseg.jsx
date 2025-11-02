import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import '../../styles/service.css';

const ConsultoriaCiberseguridad = () => {
  return (
    <RevealOnScroll>
      <section className="services format-section">
        <h2 className="services-title">🔒 Consultoría en Ciberseguridad</h2>
        <p className="service-intro">
          Asesoramos a empresas para identificar vulnerabilidades y aplicar soluciones efectivas de seguridad, protegiendo activos digitales y datos sensibles.
        </p>

        <RevealOnScroll stagger staggerDelay={100}>
          <div className="services-grid">
            <div className="service-card">
            <h3 className="service-title">Áreas de enfoque</h3>
            <ul className="service-list">
              <li>Análisis de riesgos y vulnerabilidades.</li>
              <li>Diseño e implementación de políticas de seguridad.</li>
              <li>Monitoreo y auditoría de sistemas críticos.</li>
              <li>Protección de información confidencial y corporativa.</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-title">Beneficios</h3>
            <ul className="service-list">
              <li>Detección proactiva de amenazas.</li>
              <li>Reducción de riesgos de ataques cibernéticos.</li>
              <li>Cumplimiento de normas y regulaciones de seguridad.</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-title">Resultados esperados</h3>
            <ul className="service-list">
              <li>Infraestructura digital segura y confiable.</li>
              <li>Protección de datos sensibles y críticos.</li>
              <li>Mayor confianza para clientes y socios estratégicos.</li>
            </ul>
          </div>
          </div>
        </RevealOnScroll>
      </section>
    </RevealOnScroll>
  );
};

export default ConsultoriaCiberseguridad;
