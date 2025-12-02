// src/pages/Oferta.jsx
import React, { useState } from "react";
import "./Oferta.css";
import Navbar from "./Navbar";

const PROGRAMAS = [
  {
    id: "tsu-tic-dsm",
    name:
      "TSU en Tecnologías de la Información área Desarrollo de Software Multiplataforma",
    level: "TSU",
    area: "Tecnologías de la Información",
    duration: "6 cuatrimestres",
    modality: "Escolarizada",
    shift: "Matutino",
    campus: "Puebla",
    tag: "Tecnología",
  },
  {
    id: "tsu-meca",
    name: "TSU en Mecatrónica área Automatización",
    level: "TSU",
    area: "Mecatrónica",
    duration: "6 cuatrimestres",
    modality: "Escolarizada",
    shift: "Matutino y Vespertino",
    campus: "Puebla",
    tag: "Industria",
  },
  {
    id: "tsu-admon",
    name: "TSU en Administración área Capital Humano",
    level: "TSU",
    area: "Administración",
    duration: "6 cuatrimestres",
    modality: "Escolarizada",
    shift: "Matutino",
    campus: "Puebla",
    tag: "Gestión",
  },
  {
    id: "ing-tic",
    name: "Ingeniería en Tecnologías de la Información",
    level: "Ingeniería",
    area: "Tecnologías de la Información",
    duration: "11 cuatrimestres (incluye TSU)",
    modality: "Escolarizada",
    shift: "Matutino",
    campus: "Puebla",
    tag: "Tecnología",
  },
  {
    id: "ing-meca",
    name: "Ingeniería en Mecatrónica",
    level: "Ingeniería",
    area: "Mecatrónica",
    duration: "11 cuatrimestres (incluye TSU)",
    modality: "Escolarizada",
    shift: "Matutino",
    campus: "Puebla",
    tag: "Industria",
  },
  {
    id: "maestria-innovacion",
    name: "Maestría en Innovación y Desarrollo Tecnológico",
    level: "Posgrado",
    area: "Innovación",
    duration: "6 cuatrimestres",
    modality: "Mixta",
    shift: "Sabático / Vespertino",
    campus: "Puebla",
    tag: "Posgrado",
  },
];

const LEVELS = ["Todos", "TSU", "Ingeniería", "Posgrado"];

const Oferta = () => {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("Todos");

  const normalized = search.trim().toLowerCase();

  const filteredPrograms = PROGRAMAS.filter((program) => {
    if (levelFilter !== "Todos" && program.level !== levelFilter) return false;

    if (!normalized) return true;

    return (
      program.name.toLowerCase().includes(normalized) ||
      program.area.toLowerCase().includes(normalized) ||
      program.tag.toLowerCase().includes(normalized) ||
      program.level.toLowerCase().includes(normalized)
    );
  });

  return (
    <div className="oferta">
      {/* NAVBAR GLOBAL */}
      <Navbar />

      <main className="oferta-main">
        {/* HERO / ENCABEZADO */}
        <section className="oferta-hero">
          <div className="oferta-shell oferta-hero-grid">
            <div>
              <p className="oferta-kicker">Oferta educativa</p>
              <h1 className="oferta-title">
                Programas diseñados para el mundo real.
              </h1>
              <p className="oferta-subtitle">
                Explora los programas de Técnico Superior Universitario,
                Ingeniería y Posgrado de la Universidad Tecnológica de Puebla.
                Encuentra el plan que mejor se adapte a tu proyecto de vida.
              </p>

              {/* BUSCADOR */}
              <div className="oferta-search">
                <input
                  type="text"
                  className="oferta-search-input"
                  placeholder="Buscar por nombre de programa, área o nivel (ej. 'Mecatrónica', 'TSU', 'Posgrado')"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* FILTROS POR NIVEL */}
              <div className="oferta-filters">
                <span className="oferta-filters-label">Filtrar por nivel:</span>
                <div className="oferta-filters-pills">
                  {LEVELS.map((level) => (
                    <button
                      key={level}
                      type="button"
                      className={
                        "oferta-pill " +
                        (levelFilter === level ? "oferta-pill--active" : "")
                      }
                      onClick={() => setLevelFilter(level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* ATALHOS RÁPIDOS */}
              <div className="oferta-quick">
                <span className="oferta-quick-label">Búsquedas rápidas:</span>
                <button
                  type="button"
                  className="oferta-quick-chip"
                  onClick={() => {
                    setLevelFilter("TSU");
                    setSearch("");
                  }}
                >
                  Programas TSU
                </button>
                <button
                  type="button"
                  className="oferta-quick-chip"
                  onClick={() => {
                    setLevelFilter("Ingeniería");
                    setSearch("Tecnologías de la Información");
                  }}
                >
                  Ingenierías TIC
                </button>
                <button
                  type="button"
                  className="oferta-quick-chip"
                  onClick={() => {
                    setLevelFilter("Posgrado");
                    setSearch("");
                  }}
                >
                  Posgrados
                </button>
              </div>
            </div>

            {/* PANEL RESUMEN */}
            <aside className="oferta-panel">
              <div className="oferta-panel-header">
                <p>Modelo UTPuebla</p>
              </div>
              <ul className="oferta-panel-list">
                <li>
                  <span className="oferta-panel-number">70%</span>
                  <span className="oferta-panel-text">
                    Formación práctica en laboratorios y talleres
                  </span>
                </li>
                <li>
                  <span className="oferta-panel-number">2</span>
                  <span className="oferta-panel-text">
                    Títulos al egresar: TSU + Ingeniería
                  </span>
                </li>
                <li>
                  <span className="oferta-panel-number">+200</span>
                  <span className="oferta-panel-text">
                    Convenios con empresas para estadías profesionales
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* LISTADO DE PROGRAMAS */}
        <section className="oferta-list">
          <div className="oferta-shell">
            <header className="oferta-list-header">
              <div>
                <p className="oferta-list-kicker">Programas disponibles</p>
                <h2 className="oferta-list-title">
                  Resultados: {filteredPrograms.length} programa
                  {filteredPrograms.length !== 1 ? "s" : ""}
                </h2>
              </div>
              <p className="oferta-list-meta">
                Información referencial. Para detalles oficiales consulta las
                convocatorias y fichas técnicas de cada programa.
              </p>
            </header>

            {filteredPrograms.length === 0 ? (
              <p className="oferta-empty">
                No se encontraron programas que coincidan con{" "}
                <strong>{search}</strong>. Intenta buscar por el nombre del
                programa, área o nivel (TSU, Ingeniería, Posgrado).
              </p>
            ) : (
              <div className="oferta-grid">
                {filteredPrograms.map((program) => (
                  <article key={program.id} className="oferta-card">
                    <div className="oferta-card-header">
                      <span className="oferta-card-level">
                        {program.level}
                      </span>
                      <span className="oferta-card-tag">{program.tag}</span>
                    </div>

                    <h3 className="oferta-card-title">{program.name}</h3>

                    <p className="oferta-card-area">{program.area}</p>

                    <ul className="oferta-card-data">
                      <li>
                        <span className="oferta-data-label">Duración:</span>
                        <span className="oferta-data-value">
                          {program.duration}
                        </span>
                      </li>
                      <li>
                        <span className="oferta-data-label">Modalidad:</span>
                        <span className="oferta-data-value">
                          {program.modality}
                        </span>
                      </li>
                      <li>
                        <span className="oferta-data-label">Turno:</span>
                        <span className="oferta-data-value">
                          {program.shift}
                        </span>
                      </li>
                      <li>
                        <span className="oferta-data-label">Campus:</span>
                        <span className="oferta-data-value">
                          {program.campus}
                        </span>
                      </li>
                    </ul>

                    <div className="oferta-card-footer">
                      <a href="/admisiones" className="oferta-card-link">
                        Ver requisitos de admisión
                      </a>
                      <br></br>
                      <a href="/contacto" className="oferta-card-link-secondary">
                        Solicitar más información
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="oferta-cta">
          <div className="oferta-shell oferta-cta-inner">
            <div>
              <h2 className="oferta-cta-title">
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="oferta-cta-text">
                Revisa las fechas de admisión, costos y requisitos para
                convertirte en parte de la comunidad UTPuebla.
              </p>
            </div>
            <a href="/admisiones" className="oferta-cta-btn">
              Ir a Admisiones
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Oferta;
