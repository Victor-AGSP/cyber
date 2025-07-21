import React from 'react';
import '../styles/cursos.css';

const courses = [
  {
    id: 1,
    title: 'Fundamentos de Ciberseguridad',
    description: 'Aprende los conceptos básicos de ciberseguridad, amenazas comunes y mejores prácticas.',
    image: '/images/cyber.webp',
  },
  {
    id: 2,
    title: 'Hacking Ético',
    description: 'Descubre técnicas de pentesting y hacking ético para fortalecer la seguridad.',
    image: '/images/cyber.webp',
  },
  {
    id: 3,
    title: 'Seguridad en Redes',
    description: 'Protege infraestructuras de red y conoce las configuraciones seguras más importantes.',
    image: '/images/cyber.webp',
  },
  {
    id: 4,
    title: 'Análisis de Vulnerabilidades',
    description: 'Identifica y evalúa vulnerabilidades para mitigar riesgos en sistemas informáticos.',
    image: '/images/cyber.webp',
  },
];

export default function Courses() {
  return (
    <section className="courses-section">
      <h2 className="courses-title">Nuestros Cursos</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h3 className="course-name">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <button className="course-button">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
