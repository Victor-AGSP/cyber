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
              Al acceder y utilizar los servicios de <strong>VicForge</strong>, usted acepta estar sujeto a estos 
              Términos y Condiciones, así como a todas las leyes y regulaciones aplicables. Si no está de acuerdo 
              con alguno de estos términos, está prohibido usar o acceder a nuestros servicios.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">2. Definiciones</h2>
            <ul className="legal-list">
              <li><strong>"Servicios"</strong>: Todos los servicios tecnológicos de VicForge, incluyendo desarrollo 
                  de aplicaciones móviles, software de escritorio, sitios web y soluciones de seguridad digital.</li>
              <li><strong>"Cliente"</strong>: Persona física o jurídica que contrata nuestros servicios.</li>
              <li><strong>"Datos del Cliente"</strong>: Información proporcionada por el cliente o recopilada 
                  durante la prestación de servicios.</li>
              <li><strong>"Plataforma"</strong>: Sitio web, aplicaciones y herramientas de VicForge.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">3. Descripción de Servicios</h2>
            <div className="subsection">
              <h3 className="subsection-title">3.1 Servicios Tecnológicos</h3>
              <p className="section-text">Ofrecemos:</p>
              <ul className="legal-list">
                <li>Desarrollo de aplicaciones móviles y software de escritorio</li>
                <li>Creación y mantenimiento de sitios web</li>
                <li>Soluciones de seguridad digital y auditorías</li>
                <li>Consultoría tecnológica a medida</li>
                <li>Soporte técnico y optimización de sistemas</li>
                <li>Capacitación y acompañamiento en tecnología</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">3.2 Alcance de Servicios</h3>
              <p className="section-text">
                El alcance específico de cada servicio se define en un Acuerdo de Servicio separado, 
                donde se detallan objetivos, metodología, cronograma y entregables.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">4. Obligaciones del Cliente</h2>
            <div className="subsection">
              <h3 className="subsection-title">4.1 Autorización y Permisos</h3>
              <p className="section-text">El cliente debe:</p>
              <ul className="legal-list">
                <li>Proporcionar permisos y accesos necesarios para el desarrollo o soporte de software</li>
                <li>Garantizar que tiene derechos legales sobre los sistemas y datos involucrados</li>
                <li>Obtener consentimiento de terceros cuando sea necesario</li>
                <li>Definir claramente el alcance y limitaciones del proyecto</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">4.2 Cooperación</h3>
              <p className="section-text">El cliente debe:</p>
              <ul className="legal-list">
                <li>Proporcionar acceso a documentación y sistemas necesarios</li>
                <li>Designar un punto de contacto técnico</li>
                <li>Informar sobre horarios críticos y sistemas sensibles</li>
                <li>Responder oportunamente a consultas y solicitudes</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">5. Obligaciones de VicForge</h2>
            <ul className="legal-list">
              <li>Prestar servicios con profesionalismo y según estándares de la industria</li>
              <li>Mantener la confidencialidad de la información del cliente</li>
              <li>Proporcionar informes detallados y recomendaciones</li>
              <li>Operar dentro del alcance autorizado</li>
              <li>Minimizar el impacto en operaciones del cliente</li>
              <li>Garantizar seguridad y eficiencia en todas las soluciones tecnológicas</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">6. Confidencialidad</h2>
            <div className="subsection">
              <h3 className="subsection-title">6.1 Información Confidencial</h3>
              <p className="section-text">
                Ambas partes acuerdan mantener confidencial toda información intercambiada durante 
                la prestación de servicios, incluyendo:
              </p>
              <ul className="legal-list">
                <li>Datos empresariales sensibles</li>
                <li>Metodologías y herramientas propietarias</li>
                <li>Diseños, códigos y arquitecturas de sistemas</li>
              </ul>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">6.2 Excepciones</h3>
              <p className="section-text">
                La obligación de confidencialidad no aplica a información de dominio público, 
                requerida por ley o previamente conocida por la parte receptora.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">7. Propiedad Intelectual</h2>
            <ul className="legal-list">
              <li>VicForge retiene derechos sobre metodologías, herramientas y procesos propios</li>
              <li>Los desarrollos específicos entregados pertenecen al cliente según acuerdo</li>
              <li>El cliente no puede reproducir nuestras herramientas sin autorización</li>
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
            <p className="section-text">
              VicForge no será responsable por daños indirectos, pérdida de datos, interrupciones de negocio 
              o resultados derivados de acciones del cliente fuera de nuestras recomendaciones.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">10. Garantías y Descargos</h2>
            <ul className="legal-list">
              <li>Los servicios se prestan "tal cual" sin garantías implícitas o explícitas</li>
              <li>No garantizamos detección de todas vulnerabilidades o problemas externos</li>
              <li>El cliente es responsable de implementar nuestras recomendaciones</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="section-title">11. Terminación</h2>
            <p className="section-text">
              Cualquiera de las partes puede terminar el acuerdo con aviso previo de 30 días, o inmediatamente 
              por incumplimiento de términos o uso no autorizado de los servicios.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">12. Ley Aplicable y Jurisdicción</h2>
            <p className="section-text">
              Estos términos se rigen por las leyes del país donde opera VicForge. Cualquier disputa se resolverá 
              mediante arbitraje vinculante o tribunales competentes de nuestra jurisdicción.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">13. Contacto</h2>
            <p className="section-text">
              Para preguntas sobre estos Términos y Condiciones:
            </p>
            <div className="contact-info">
              <p><strong>VicForge</strong></p>
              <p>Email: <a href="mailto:legal@vicforge.com">legal@vicforge.com</a></p>
              <p>Departamento Legal: <a href="mailto:contracts@vicforge.com">contracts@vicforge.com</a></p>
            </div>
          </section>

          <section className="legal-section acknowledgment">
            <p className="section-text">
              <strong>Al utilizar nuestros servicios, usted reconoce haber leído, entendido y aceptado estos 
              Términos y Condiciones en su totalidad.</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terminos;
