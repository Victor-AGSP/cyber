import React from 'react';
import '../styles/services.css';

const services = [
  {
    title: 'Formateo y Optimización',
    description:
      'Formateamos y optimizamos sistemas operativos para garantizar máximo rendimiento, seguridad y estabilidad.',
    icon: '🧹',
  },
  {
    title: 'Desarrollo de Páginas Web',
    description:
      'Diseñamos y desarrollamos sitios web modernos, rápidos y seguros, adaptados a las necesidades de tu negocio.',
    icon: '💻',
  },
  {
    title: 'Desarrollo de Aplicaciones',
    description:
      'Creamos aplicaciones móviles y de escritorio a medida, con altos estándares de seguridad.',
    icon: '📱',
  },
  {
    title: 'Recuperación de Información',
    description:
      'Recuperamos datos eliminados o inaccesibles en discos duros, pendrives y otros dispositivos de almacenamiento, aplicando métodos seguros y confidenciales.',
    icon: '💾',
  },
  {
    title: 'Refactorización a microservicios',
    description:
      'Refactorizamos tu sistema a microservicios para mejorar escalabilidad, mantenimiento y despliegue continuo.',
    icon: '⚙️',
  },
  {
    title: 'Consultoría en Ciberseguridad',
    description:
      'Asesoramos a empresas para identificar vulnerabilidades y aplicar soluciones efectivas de seguridad.',
    icon: '🔒',
  },
  {
    title: 'Soporte Técnico',
    description:
      'Brindamos soporte técnico remoto y presencial para resolver problemas y mantener sistemas seguros.',
    icon: '🛠️',
  },
];

export default function Servicios() {
  return (
    <section className="services">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
