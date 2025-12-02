// src/pages/Inicio.jsx
import React from "react";
import "./Inicio.css";
import Navbar from "./Navbar";


import logoUTP from "../assets/Logo.png"; 

const Inicio = () => {
  return (
    <div className="inicio">
      {/* NAVBAR GLOBAL */}
      <Navbar />

      {/* CONTENIDO DE LA PÁGINA */}
      <main className="inicio-main">
        {/* HERO */}
        <section className="hero">
          <div className="inicio-shell hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Universidad Tecnológica de Puebla</p>
              <h1 className="hero-title">
                Forjando tu futuro,
                <span>transformando el mañana.</span>
              </h1>
              <p className="hero-subtitle">
                Descubre una educación que te prepara para los desafíos del
                mundo real con un modelo 70% práctico y conexión directa con la
                industria.
              </p>

              <div className="hero-cta-row">
                <a
                  href="/oferta"
                  className="inicio-btn inicio-btn--primary inicio-btn--lg"
                >
                  Ver oferta educativa
                </a>
                <a
                  href="/admisiones"
                  className="inicio-btn inicio-btn--ghost inicio-btn--lg"
                >
                  Conoce el proceso de admisión
                </a>
              </div>

              <div className="hero-badges">
                <div className="hero-badge">
                  <span className="hero-badge-number">70%</span>
                  <span className="hero-badge-text">Formación práctica</span>
                </div>
                <div className="hero-badge">
                  <span className="hero-badge-number">+200</span>
                  <span className="hero-badge-text">
                    Convenios con empresas
                  </span>
                </div>
                <div className="hero-badge">
                  <span className="hero-badge-number">Doble</span>
                  <span className="hero-badge-text">
                    Titulación TSU + Ingeniería
                  </span>
                </div>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="hero-panel-header">
                <p>Explora la UTPuebla</p>
              </div>
              <div className="hero-panel-grid">
                <a href="/oferta" className="hero-panel-card">
                  <h2>Oferta educativa</h2>
                  <p>
                    Encuentra el programa ideal entre nuestras carreras
                    técnicas, TSU e ingenierías.
                  </p>
                  <span className="hero-panel-link">Ver programas</span>
                </a>

                <a href="/admisiones" className="hero-panel-card">
                  <h2>Proceso de admisión</h2>
                  <p>
                    Conoce fechas, requisitos y pasos para convertirte en parte
                    de nuestra comunidad.
                  </p>
                  <span className="hero-panel-link">Ver convocatorias</span>
                </a>

                <a href="/vida-estudiantil" className="hero-panel-card">
                  <h2>Vida estudiantil</h2>
                  <p>
                    Talleres, clubes, actividades culturales y deportivas para
                    complementar tu formación.
                  </p>
                  <span className="hero-panel-link">Descubrir más</span>
                </a>

                <a href="/noticias" className="hero-panel-card">
                  <h2>Noticias y eventos</h2>
                  <p>
                    Entérate de lo más reciente en innovación, proyectos y
                    logros de la UTPuebla.
                  </p>
                  <span className="hero-panel-link">Ver noticias</span>
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* FRANJA DE DATOS CLAVE */}
        <section className="stats">
          <div className="inicio-shell stats-row">
            <div className="stat">
              <span className="stat-number">+25</span>
              <span className="stat-label">Programas académicos</span>
            </div>
            <div className="stat">
              <span className="stat-number">+6,000</span>
              <span className="stat-label">Estudiantes activos</span>
            </div>
            <div className="stat">
              <span className="stat-number">9/10</span>
              <span className="stat-label">
                Egresados empleados al egresar
              </span>
            </div>
          </div>
        </section>

        {/* NOTICIAS */}
        <section className="news">
          <div className="inicio-shell">
            <header className="section-header">
              <div>
                <p className="section-kicker">Noticias y eventos</p>
                <h2 className="section-title">
                  Lo que está pasando en la UTPuebla
                </h2>
              </div>
              <a href="/noticias" className="section-link">
                Ver todas las noticias
              </a>
            </header>

            <div className="news-layout">
              <article className="news-featured">
                <div className="news-tag">Evento</div>
                <h3 className="news-title">
                  Feria de Proyectos Innovadores 2024
                </h3>
                <p className="news-text">
                  Estudiantes de diferentes programas presentaron soluciones
                  creativas a retos reales de la industria, fortaleciendo la
                  vinculación universidad–empresa.
                </p>
                <p className="news-meta">Puebla · Mayo 2024</p>
              </article>

              <div className="news-list">
                <article className="news-item">
                  <div className="news-tag news-tag--accent">Convenio</div>
                  <h3 className="news-item-title">
                    Nuevo acuerdo con empresa líder en tecnología
                  </h3>
                  <p className="news-item-text">
                    Se amplían las oportunidades de estadías, prácticas y
                    proyectos conjuntos para las ingenierías en TIC y
                    Mecatrónica.
                  </p>
                </article>

                <article className="news-item">
                  <div className="news-tag">Logro</div>
                  <h3 className="news-item-title">
                    Equipo de robótica gana competencia nacional
                  </h3>
                  <p className="news-item-text">
                    El talento de la UTPuebla destaca a nivel nacional con
                    proyectos de automatización y control de alta complejidad.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ¿POR QUÉ ELEGIR UTPUEBLA? */}
        <section className="reasons">
          <div className="inicio-shell">
            <header className="section-header section-header--center">
              <p className="section-kicker">Modelo educativo</p>
              <h2 className="section-title">¿Por qué elegir la UTPuebla?</h2>
              <p className="section-subtitle">
                Un modelo intensivo, práctico y conectado con las necesidades
                del sector productivo.
              </p>
            </header>

            <div className="reasons-grid">
              <article className="reason-card">
                <div className="reason-icon">
                  <span>70%</span>
                </div>
                <h3>Modelo 70% práctico</h3>
                <p>
                  Aprende haciendo desde el primer cuatrimestre en
                  laboratorios, talleres y espacios especializados.
                </p>
              </article>

              <article className="reason-card">
                <div className="reason-icon">
                  <span>+</span>
                </div>
                <h3>Vinculación con empresas</h3>
                <p>
                  Estadías profesionales, proyectos integradores y asesoría de
                  especialistas del sector productivo.
                </p>
              </article>

              <article className="reason-card">
                <div className="reason-icon">
                  <span>★</span>
                </div>
                <h3>Certificaciones y competencias</h3>
                <p>
                  Fortalece tu perfil con certificaciones y competencias que
                  respaldan tus conocimientos a nivel nacional e internacional.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="testimonials">
          <div className="inicio-shell">
            <header className="section-header section-header--center">
              <p className="section-kicker">Experiencias reales</p>
              <h2 className="section-title">
                Lo que dicen nuestros estudiantes
              </h2>
            </header>

            <div className="testimonials-strip">
              <article className="testimonial-card">
                <p className="testimonial-text">
                  “La UTPuebla me dio las herramientas y la confianza para
                  emprender. El enfoque práctico y el acompañamiento de los
                  docentes hicieron la diferencia.”
                </p>
                <div className="testimonial-meta">
                  <div className="testimonial-avatar">AS</div>
                  <div>
                    <p className="testimonial-name">Ana Sofía Gutiérrez</p>
                    <p className="testimonial-role">
                      Egresada de Ingeniería en Tecnologías de la Información
                    </p>
                  </div>
                </div>
              </article>

              <article className="testimonial-card">
                <p className="testimonial-text">
                  “Gracias a las estadías profesionales pude incorporarme a una
                  empresa antes de terminar mi carrera. Llegué con experiencia
                  real y proyectos concretos.”
                </p>
                <div className="testimonial-meta">
                  <div className="testimonial-avatar">CM</div>
                  <div>
                    <p className="testimonial-name">Carlos Mendoza</p>
                    <p className="testimonial-role">
                      Estudiante de Mecatrónica
                    </p>
                  </div>
                </div>
              </article>

              <article className="testimonial-card">
                <p className="testimonial-text">
                  “Los laboratorios están bien equipados y siempre hay
                  oportunidades para participar en concursos, proyectos y
                  actividades tecnológicas.”
                </p>
                <div className="testimonial-meta">
                  <div className="testimonial-avatar">LR</div>
                  <div>
                    <p className="testimonial-name">Laura Ramírez</p>
                    <p className="testimonial-role">
                      Estudiante de Ingeniería en Energías Renovables
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="inicio-footer">
        <div className="inicio-shell footer-grid">
          <div className="footer-brand">
            <span className="footer-brand-name">UTPuebla</span>
            <p className="footer-text">
              Antiguo Camino a la Resurrección 1002 A, Zona Industrial, 72300
              Puebla, Pue.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Enlaces</h3>
            <ul className="footer-list">
              <li>
                <a href="/oferta" className="footer-link">
                  Oferta educativa
                </a>
              </li>
              <li>
                <a href="/admisiones" className="footer-link">
                  Admisiones
                </a>
              </li>
              <li>
                <a href="/vida-estudiantil" className="footer-link">
                  Vida estudiantil
                </a>
              </li>
              <li>
                <a href="/noticias" className="footer-link">
                  Noticias y eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-list">
              <li className="footer-text">Tel. (222) 000 0000</li>
              <li className="footer-text">contacto@utpuebla.edu.mx</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Sigamos en contacto</h3>
            <p className="footer-text">
              Síguenos en redes para conocer más sobre la vida universitaria.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-dot" aria-label="Facebook" />
              <a href="#" className="footer-social-dot" aria-label="X" />
              <a
                href="#"
                className="footer-social-dot"
                aria-label="Instagram"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="inicio-shell footer-bottom-inner">
            <p className="footer-text">
              © {new Date().getFullYear()} Universidad Tecnológica de Puebla.
              Todos los derechos reservados.
            </p>
            <a href="/aviso-privacidad" className="footer-link">
              Aviso de privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
