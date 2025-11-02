import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import '../../styles/service.css';

const FormateoOptimizacion = () => {
  return (
    <RevealOnScroll>
      <section className="services format-section">
      <h2 className="services-title">🖥️ Formateo y Optimización</h2>
      <p className="service-intro">
        Garantizamos que tus sistemas operativos funcionen al máximo, combinando rendimiento, seguridad y estabilidad. Mejoramos la experiencia de uso y prolongamos la vida útil de tus equipos.
      </p>

      <RevealOnScroll stagger staggerDelay={100}>
        <div className="services-grid">
          <div className="service-card">
          <h3 className="service-title">¿En qué consiste?</h3>
          <ul className="service-list">
            <li>Instalación completa de sistemas operativos y drivers actualizados.</li>
            <li>Eliminación de virus, malware y software innecesario.</li>
            <li>Optimización de recursos para mejorar velocidad y rendimiento.</li>
            <li>Configuración avanzada de seguridad y protección de datos.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">Beneficios</h3>
          <ul className="service-list">
            <li>Equipos más rápidos y estables.</li>
            <li>Mayor seguridad y protección frente a amenazas digitales.</li>
            <li>Reducción de errores y fallas del sistema.</li>
            <li>Mantenimiento preventivo que prolonga la vida útil del equipo.</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">Resultados esperados</h3>
          <ul className="service-list">
            <li>Sistemas operativos confiables y completamente funcionales.</li>
            <li>Experiencia de usuario más fluida y productiva.</li>
            <li>Mayor eficiencia y rendimiento general de los equipos.</li>
          </ul>
        </div>
        </div>
      </RevealOnScroll>
      </section>
    </RevealOnScroll>
  );
};

export default FormateoOptimizacion;
