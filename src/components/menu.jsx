import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' },
  /*{ label: 'Cursos', path: '/cursos' },*/
  ];

  // socialLinks removed (not used in this menu). Contact page holds the social links.

  return (
    <nav className="menu-nav">
      <div className="menu-container">
        <Link to="/" className="menu-logo" onClick={() => setIsOpen(false)}>
          <span className="logo-accent">Vic</span>Forge
        </Link>
        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`menu-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className="menu-link"
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Menu);
