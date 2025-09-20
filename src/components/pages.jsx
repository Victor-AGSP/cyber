import React from "react";
import "../styles/pages.css"; // Usamos la misma paleta base

function Pages() {
  const proyectos = [
    {
      titulo: "Pastelería y repostería",
      descripcion:
        "Desarrollo de una página web para una pastelería local, incluyendo catálogo de productos, carrito de compras y sistema de reservas.",
      link: "https://pasteleria-two.vercel.app/",
    },
    {
      titulo: "Creacion de microservicio de busqueda",
      descripcion:
        "Desarrollo de un microservicio de búsqueda utilizando spring boot y maven, implementando algoritmos de búsqueda eficientes y escalables.",
      link: "https://www.bne.cl/",
    },
    {
        titulo: "Juegos de cartas",
        descripcion:
          "Desarrollo de pagina web para catálogo de cartas de juegos.",
        link: "",
    },
  ];

  return (
    <div className="pages-container">
      <section className="pages-header">
        <h2>📂 Proyectos Realizados</h2>
        <p>
          Estos son algunos de los trabajos destacados que hemos desarrollado
          para ayudar a empresas a fortalecer su seguridad digital.
        </p>
      </section>

      <div className="pages-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="pages-card">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.link} className="pages-link">
              Ver más →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
