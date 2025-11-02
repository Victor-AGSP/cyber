import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import '../../styles/service.css';

const RecuperacionInformacion = () => {
  return (
    <RevealOnScroll>
      <section className="services format-section">
        <h2 className="services-title">💾 Recuperación de Información</h2>
        <p className="service-intro">
          Recuperamos datos eliminados o inaccesibles de discos duros, pendrives y otros dispositivos, aplicando métodos seguros y confidenciales.
        </p>

        <RevealOnScroll stagger staggerDelay={100}>
          <div className="services-grid">
            <div className="service-card">
            <h3 className="service-title">Qué hacemos</h3>
            <ul className="service-list">
              <li>Recuperación de archivos eliminados accidentalmente.</li>
              <li>Rescate de información de dispositivos dañados o formateados.</li>
              <li>Recuperación de bases de datos y documentos críticos.</li>
              <li>Procesos 100% confidenciales y seguros.</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-title">Beneficios</h3>
            <ul className="service-list">
              <li>Minimización de pérdidas de información valiosa.</li>
              <li>Recuperación rápida y eficiente.</li>
              <li>Confianza y seguridad en cada procedimiento.</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-title">Resultados esperados</h3>
            <ul className="service-list">
              <li>Recuperación completa de datos críticos.</li>
              <li>Continuidad de operaciones sin interrupciones.</li>
              <li>Protección y confidencialidad de la información.</li>
            </ul>
          </div>
            </div>
          </RevealOnScroll>
      </section>
    </RevealOnScroll>
  );
};

export default RecuperacionInformacion;
