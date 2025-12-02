import React from "react";
import { Link } from "react-router-dom"; // 👈 IMPORTANTE
import "./Portada.css";
import logoUTP from "../assets/Logo.png";

const Portada = () => {
  return (
    <div className="portada-container">
      <div className="portada-card">
        {/* Encabezado con logo y nombre de la universidad */}
        <header className="portada-header">
          <div className="portada-logo-wrapper">
            <img
              src={logoUTP}
              alt="Logo Universidad Tecnológica de Puebla"
              className="portada-logo"
            />
          </div>
          <div className="portada-university-info">
            <h1 className="portada-university-name">
              UNIVERSIDAD TECNOLÓGICA DE PUEBLA
            </h1>
            <p className="portada-cycle">
              Ciclo escolar: <span>Septiembre - Diciembre 2025</span>
            </p>
          </div>
        </header>

        {/* Contenido principal tipo portada de documento */}
        <main className="portada-content">
          <section className="portada-section">
            <h2>Área</h2>
            <p>Tecnologías de la información</p>
          </section>

          <section className="portada-section">
            <h2>Materia</h2>
            <p>Experiencia de Usuario</p>
          </section>

          <section className="portada-section portada-section--two-columns">
            <div>
              <h2>Alumnos</h2>
              <ul className="portada-students-list">
                <li>
                  <span>Ivan Gonzalez Ramirez</span>{" "}
                  <span className="portada-id">UTP0155873</span>
                </li>
                <li>
                  <span>Jose Luis Bautista Carlos</span>{" "}
                  <span className="portada-id">UTP0147825</span>
                </li>
              </ul>
            </div>

            <div className="portada-side-info">
              <div className="portada-subsection">
                <h2>Grado y grupo</h2>
                <p>7C</p>
              </div>

              <div className="portada-subsection">
                <h2>Maestro</h2>
                <p>Cabrera Gutierrez Jose Ruben</p>
              </div>
            </div>
          </section>

          <section className="portada-section portada-title-section">
            <h2>Título de la tarea</h2>
            <p className="portada-task-title">Re-diseño UTPuebla</p>
          </section>
        </main>

        {/* Pie institucional + link a Inicio */}
        <footer className="portada-footer">
          <span>Departamento de Tecnologías de la Información</span>

          <Link to="/inicio" className="portada-btn-inicio">
            Ir al inicio
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Portada;
