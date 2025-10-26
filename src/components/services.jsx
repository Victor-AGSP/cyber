import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import '../styles/services.css';

const services = [
  {
    title: 'Formateo y Optimización',
    description:
      'Formateamos y optimizamos sistemas operativos para garantizar máximo rendimiento, seguridad y estabilidad.',
    icon: '🧹',
    path: '/formateo-optimizacion', // Agrega la ruta correspondiente
  },
  {
    title: 'Desarrollo de Páginas Web',
    description:
      'Diseñamos y desarrollamos sitios web modernos, rápidos y seguros, adaptados a las necesidades de tu negocio.',
    icon: '💻',
    path: '/desarrollo-paginas-web', // Agrega la ruta correspondiente
  },
  {
    title: 'Desarrollo de Aplicaciones',
    description:
      'Creamos aplicaciones móviles y de escritorio a medida, con altos estándares de seguridad.',
    icon: '📱',
    path: '/desarrollo-aplicaciones', // Agrega la ruta correspondiente
  },
  {
    title: 'Recuperación de Información',
    description:
      'Recuperamos datos eliminados o inaccesibles en discos duros, pendrives y otros dispositivos de almacenamiento, aplicando métodos seguros y confidenciales.',
    icon: '💾',
    path: '/recuperacion-informacion', // Agrega la ruta correspondiente
  },
  {
    title: 'Consultoría en Ciberseguridad',
    description:
      'Asesoramos a empresas para identificar vulnerabilidades y aplicar soluciones efectivas de seguridad.',
    icon: '🔒',
    path: '/consultoria-ciberseguridad', // Agrega la ruta correspondiente
  },
  {
    title: 'Soporte Técnico',
    description:
      'Brindamos soporte técnico remoto y presencial para resolver problemas y mantener sistemas seguros.',
    icon: '🛠️',
    path: '/soporte-tecnico', // Agrega la ruta correspondiente
  },
];

const pronto = [
  {
    title: 'Refactorización a microservicios',
    description:
      'Refactorizamos tu sistema a microservicios para mejorar escalabilidad, mantenimiento y despliegue continuo.',
    icon: '⚙️',
    path: '/', // Agrega la ruta correspondiente
  },
];

export default function Servicios() {
  return (
    <section className="services">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.path} className="service-card" key={index}> {/* Usa Link para redirigir */}
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </Link>
        ))}
      </div>

      <h2 className="services-title">Próximamente</h2>

      <div className="services-grid">
        {pronto.map((service, index) => (
          <Link to={service.path} className="service-card" key={index}> {/* Usa Link para redirigir */}
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}