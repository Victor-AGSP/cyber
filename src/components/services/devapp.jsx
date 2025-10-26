import React from 'react';
import '../../styles/service.css';

const DesarrolloAplicaciones = () => {
  return (
    <section className="services format-section">
      <h2 className="services-title">📱 Desarrollo de Aplicaciones</h2>
      <p className="service-intro">
        Desarrollamos aplicaciones móviles y de escritorio a medida, combinando diseño intuitivo, rendimiento y seguridad.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3 className="service-title">Qué ofrecemos</h3>
          <ul className="service-list">
            <li>Aplicaciones nativas y multiplataforma.</li>
            <li>Interfaces modernas y experiencia de usuario optimizada.</li>
            <li>Seguridad avanzada y manejo seguro de datos.</li>
            <li>Integración con servicios externos y APIs.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">Beneficios</h3>
          <ul className="service-list">
            <li>Aplicaciones confiables y estables.</li>
            <li>Alta compatibilidad con diferentes dispositivos.</li>
            <li>Escalabilidad y soporte técnico a largo plazo.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">Resultados esperados</h3>
          <ul className="service-list">
            <li>Experiencia digital consistente y profesional.</li>
            <li>Mayor productividad y eficiencia para tu negocio.</li>
            <li>Aplicaciones seguras y rápidas, sin errores críticos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DesarrolloAplicaciones;
