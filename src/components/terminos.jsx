import React from 'react';
import '../styles/legal.css';

function Terminos() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1 className="legal-title">
            <span className="title-accent">Términos y</span> Condiciones
          </h1>
          <p className="legal-date">Última actualización: 26 de octubre de 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2 className="section-title">1. Aceptación de los Términos</h2>
            <p className="section-text">
              Al acceder y utilizar los servicios de CyberSecure, usted acepta estar sujeto a estos 
              Términos y Condiciones, todas las leyes y regulaciones aplicables. Si no está de acuerdo 
              con alguno de estos términos, está prohibido usar o acceder a nuestros servicios.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">2. Definiciones</h2>
            <ul className="legal-list">
              <li><strong>"Servicios"</strong>: Se refiere a todos los servicios de ciberseguridad, 
                  consultoría, pentesting, análisis de vulnerabilidades y capacitación ofrecidos por CyberSecure.</li>
              <li><strong>"Cliente"</strong>: Persona física o jurídica que contrata nuestros servicios.</li>
              <li><strong>"Datos del Cliente"</strong>: Información proporcionada por el cliente o recopilada 
                  durante la prestación de servicios.</li>
              <li><strong>"Plataforma"</strong>: Sitio web, aplicaciones y herramientas de CyberSecure.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">3. Descripción de Servicios</h2>
            <div className="subsection">
              <h3 className="subsection-title">3.1 Servicios de Ciberseguridad</h3>
              <p className="section-text">Ofrecemos:</p>
              <ul className="legal-list">
                <li>Pruebas de penetración (Pentesting) autorizado</li>
                <li>Análisis de vulnerabilidades</li>
                <li>Auditorías de seguridad</li>
                <li>Consultoría en ciberseguridad</li>
                <li>Respuesta a incidentes</li>
                <li>Capacitación y concientización en seguridad</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">3.2 Alcance de Servicios</h3>
              <p className="section-text">
                El alcance específico de cada servicio se definirá en un Acuerdo de Servicio separado 
                que detallará objetivos, metodología, cronograma y entregables.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">4. Obligaciones del Cliente</h2>
            <div className="subsection">
              <h3 className="subsection-title">4.1 Autorización y Permisos</h3>
              <p className="section-text">El cliente debe:</p>
              <ul className="legal-list">
                <li>Proporcionar autorización por escrito para todas las pruebas de seguridad</li>
                <li>Garantizar que tiene derechos legales sobre los sistemas a evaluar</li>
                <li>Obtener consentimiento de terceros cuando sea necesario</li>
                <li>Definir claramente el alcance y limitaciones de las pruebas</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">4.2 Cooperación</h3>
              <p className="section-text">El cliente debe:</p>
              <ul className="legal-list">
                <li>Proporcionar acceso necesario a sistemas y documentación</li>
                <li>Designar un punto de contacto técnico</li>
                <li>Informar sobre sistemas críticos y horarios sensibles</li>
                <li>Responder oportunamente a consultas y solicitudes</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">5. Obligaciones de CyberSecure</h2>
            <ul className="legal-list">
              <li>Realizar servicios con profesionalismo y según estándares de la industria</li>
              <li>Mantener la confidencialidad de la información del cliente</li>
              <li>Notificar inmediatamente sobre hallazgos críticos</li>
              <li>Proporcionar informes detallados y recomendaciones</li>
              <li>Operar dentro del alcance autorizado</li>
              <li>Minimizar el impacto en operaciones del cliente</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">6. Confidencialidad</h2>
            <div className="subsection">
              <h3 className="subsection-title">6.1 Información Confidencial</h3>
              <p className="section-text">
                Ambas partes acuerdan mantener confidencial toda información intercambiada durante 
                la prestación de servicios, incluyendo pero no limitado a:
              </p>
              <ul className="legal-list">
                <li>Vulnerabilidades descubiertas</li>
                <li>Arquitectura y configuración de sistemas</li>
                <li>Datos empresariales sensibles</li>
                <li>Metodologías y herramientas propietarias</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">6.2 Excepciones</h3>
              <p className="section-text">
                La obligación de confidencialidad no aplica a información que sea de dominio público, 
                requerida por ley, o previamente conocida por la parte receptora.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">7. Propiedad Intelectual</h2>
            <ul className="legal-list">
              <li>CyberSecure retiene todos los derechos sobre sus metodologías, herramientas y procesos</li>
              <li>Los informes y hallazgos específicos pertenecen al cliente</li>
              <li>El cliente no puede reproducir o compartir nuestras herramientas sin autorización</li>
              <li>Podemos usar información anonimizada para investigación y mejora de servicios</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">8. Facturación y Pagos</h2>
            <div className="subsection">
              <h3 className="subsection-title">8.1 Tarifas</h3>
              <p className="section-text">
                Las tarifas se especifican en el Acuerdo de Servicio. Los precios pueden variar según 
                complejidad, alcance y urgencia del proyecto.
              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">8.2 Términos de Pago</h3>
              <ul className="legal-list">
                <li>Facturación según calendario acordado (anticipo, hitos, finalización)</li>
                <li>Pago dentro de 30 días desde la fecha de factura</li>
                <li>Intereses por mora del 1.5% mensual sobre saldos vencidos</li>
                <li>Suspensión de servicios por pagos atrasados</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">9. Limitación de Responsabilidad</h2>
            <div className="subsection">
              <h3 className="subsection-title">9.1 Alcance de Responsabilidad</h3>
              <p className="section-text">
                En ningún caso CyberSecure será responsable por:
              </p>
              <ul className="legal-list">
                <li>Daños indirectos, incidentales o consecuentes</li>
                <li>Pérdida de datos, ganancias o interrupciones de negocio</li>
                <li>Daños causados por acciones del cliente fuera de nuestras recomendaciones</li>
                <li>Ataques de terceros no relacionados con nuestros servicios</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">9.2 Límite Máximo</h3>
              <p className="section-text">
                Nuestra responsabilidad total no excederá el monto pagado por el cliente por los 
                servicios específicos que dieron origen al reclamo, en los 12 meses previos.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">10. Garantías y Descargos</h2>
            <ul className="legal-list">
              <li>Los servicios se prestan "tal cual" sin garantías implícitas o explícitas</li>
              <li>No garantizamos que se detectarán todas las vulnerabilidades</li>
              <li>La seguridad es un proceso continuo que requiere actualizaciones constantes</li>
              <li>El cliente es responsable de implementar las recomendaciones proporcionadas</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">11. Indemnización</h2>
            <p className="section-text">
              El cliente acepta indemnizar y eximir de responsabilidad a CyberSecure contra cualquier 
              reclamo derivado de:
            </p>
            <ul className="legal-list">
              <li>Uso de servicios fuera del alcance autorizado</li>
              <li>Violación de estos términos por parte del cliente</li>
              <li>Falta de autorización adecuada para pruebas realizadas</li>
              <li>Información incorrecta o incompleta proporcionada por el cliente</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">12. Terminación</h2>
            <div className="subsection">
              <h3 className="subsection-title">12.1 Terminación por Conveniencia</h3>
              <p className="section-text">
                Cualquier parte puede terminar el acuerdo con 30 días de aviso previo por escrito.
              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">12.2 Terminación por Causa</h3>
              <p className="section-text">
                Podemos terminar inmediatamente si:
              </p>
              <ul className="legal-list">
                <li>El cliente incumple términos de pago</li>
                <li>Hay violación de estos términos</li>
                <li>Se descubre uso no autorizado de nuestros servicios</li>
                <li>Existe actividad ilegal o no ética</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">13. Uso Ético</h2>
            <p className="section-text">
              Nuestros servicios solo pueden utilizarse para fines legítimos de seguridad. 
              Prohibimos estrictamente:
            </p>
            <ul className="legal-list">
              <li>Actividades ilegales o no autorizadas</li>
              <li>Pruebas sobre sistemas de terceros sin autorización</li>
              <li>Uso de vulnerabilidades descubiertas con fines maliciosos</li>
              <li>Distribución de información confidencial sin consentimiento</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">14. Fuerza Mayor</h2>
            <p className="section-text">
              No seremos responsables por incumplimientos causados por circunstancias fuera de 
              nuestro control razonable, incluyendo desastres naturales, guerras, pandemias, 
              ataques cibernéticos masivos o fallas de infraestructura crítica.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">15. Modificaciones</h2>
            <p className="section-text">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los 
              cambios significativos se notificarán con 30 días de anticipación. El uso continuado 
              de nuestros servicios constituye aceptación de los términos modificados.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">16. Ley Aplicable y Jurisdicción</h2>
            <p className="section-text">
              Estos términos se rigen por las leyes del país donde opera CyberSecure. Cualquier 
              disputa se resolverá mediante arbitraje vinculante o en tribunales competentes de 
              nuestra jurisdicción.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">17. Contacto</h2>
            <p className="section-text">
              Para preguntas sobre estos Términos y Condiciones:
            </p>
            <div className="contact-info">
              <p><strong>CyberSecure</strong></p>
              <p>Email: <a href="mailto:legal@cybersecure.com">legal@cybersecure.com</a></p>
              <p>Departamento Legal: <a href="mailto:contracts@cybersecure.com">contracts@cybersecure.com</a></p>
            </div>
          </section>

          <section className="legal-section acknowledgment">
            <p className="section-text">
              <strong>Al utilizar nuestros servicios, usted reconoce haber leído, entendido y 
              aceptado estos Términos y Condiciones en su totalidad.</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terminos;