import React from 'react';
import '../styles/legal.css';

function Privacidad() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1 className="legal-title">
            <span className="title-accent">Política de</span> Privacidad
          </h1>
          <p className="legal-date">Última actualización: 26 de octubre de 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2 className="section-title">1. Introducción</h2>
            <p className="section-text">
              En CyberSecure, nos comprometemos a proteger su privacidad y garantizar la seguridad 
              de su información personal. Esta Política de Privacidad describe cómo recopilamos, 
              usamos, compartimos y protegemos su información cuando utiliza nuestros servicios de 
              ciberseguridad y consultoría.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">2. Información que Recopilamos</h2>
            <div className="subsection">
              <h3 className="subsection-title">2.1 Información Personal</h3>
              <ul className="legal-list">
                <li>Nombre completo y datos de contacto (correo electrónico, teléfono)</li>
                <li>Información de la empresa (nombre, cargo, sector)</li>
                <li>Datos de facturación y pago</li>
                <li>Información técnica sobre su infraestructura (solo con su consentimiento)</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">2.2 Información Técnica</h3>
              <ul className="legal-list">
                <li>Dirección IP y datos de navegación</li>
                <li>Tipo de navegador y sistema operativo</li>
                <li>Cookies y tecnologías similares</li>
                <li>Registros de acceso y actividad en nuestros servicios</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">3. Uso de la Información</h2>
            <p className="section-text">Utilizamos su información para:</p>
            <ul className="legal-list">
              <li>Proporcionar y mejorar nuestros servicios de ciberseguridad</li>
              <li>Realizar análisis de vulnerabilidades y pentesting autorizados</li>
              <li>Comunicarnos con usted sobre servicios, actualizaciones y alertas de seguridad</li>
              <li>Procesar pagos y gestionar su cuenta</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Prevenir fraudes y actividades maliciosas</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">4. Protección de Datos</h2>
            <p className="section-text">
              Como empresa de ciberseguridad, implementamos las más altas medidas de seguridad:
            </p>
            <ul className="legal-list">
              <li>Cifrado end-to-end de datos sensibles (AES-256)</li>
              <li>Autenticación multifactor (MFA) para acceso a sistemas</li>
              <li>Auditorías de seguridad regulares y pruebas de penetración</li>
              <li>Monitoreo continuo de amenazas y respuesta a incidentes</li>
              <li>Almacenamiento seguro en servidores con certificaciones ISO 27001</li>
              <li>Políticas estrictas de acceso basadas en el principio de mínimo privilegio</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">5. Compartir Información</h2>
            <p className="section-text">
              No vendemos ni compartimos su información personal con terceros, excepto:
            </p>
            <ul className="legal-list">
              <li>Con su consentimiento explícito</li>
              <li>Para cumplir con obligaciones legales o requerimientos judiciales</li>
              <li>Con proveedores de servicios que trabajan en nuestro nombre (bajo acuerdos de confidencialidad)</li>
              <li>En caso de fusión, adquisición o venta de activos (previo aviso)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">6. Sus Derechos</h2>
            <p className="section-text">Usted tiene derecho a:</p>
            <ul className="legal-list">
              <li><strong>Acceder</strong> a su información personal</li>
              <li><strong>Rectificar</strong> datos incorrectos o incompletos</li>
              <li><strong>Eliminar</strong> su información (derecho al olvido)</li>
              <li><strong>Portabilidad</strong> de datos a otro proveedor</li>
              <li><strong>Oponerse</strong> al procesamiento de sus datos</li>
              <li><strong>Limitar</strong> el uso de su información</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">7. Cookies y Tecnologías de Seguimiento</h2>
            <p className="section-text">
              Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas 
              para mejorar la experiencia del usuario. Puede configurar su navegador para rechazar 
              cookies, aunque esto puede afectar la funcionalidad de nuestros servicios.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">8. Retención de Datos</h2>
            <p className="section-text">
              Conservamos su información durante el tiempo necesario para cumplir con los fines 
              establecidos en esta política, requisitos legales y de auditoría. Los datos de 
              seguridad se conservan según las normativas aplicables (generalmente 5 años).
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">9. Transferencias Internacionales</h2>
            <p className="section-text">
              Sus datos pueden ser transferidos y procesados en países fuera de su jurisdicción. 
              Garantizamos que estas transferencias cumplen con los estándares de protección de 
              datos aplicables mediante cláusulas contractuales estándar y certificaciones adecuadas.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">10. Menores de Edad</h2>
            <p className="section-text">
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
              intencionalmente información de menores sin el consentimiento parental.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">11. Cambios a esta Política</h2>
            <p className="section-text">
              Podemos actualizar esta política periódicamente. Le notificaremos sobre cambios 
              significativos por correo electrónico o mediante un aviso destacado en nuestro sitio web.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">12. Contacto</h2>
            <p className="section-text">
              Para preguntas sobre esta Política de Privacidad o ejercer sus derechos, contáctenos:
            </p>
            <div className="contact-info">
              <p><strong>CyberSecure</strong></p>
              <p>Email: <a href="mailto:privacy@cybersecure.com">privacy@cybersecure.com</a></p>
              <p>Responsable de Protección de Datos: <a href="mailto:dpo@cybersecure.com">dpo@cybersecure.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacidad;