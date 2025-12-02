// src/pages/Directorio.jsx
import React, { useState } from "react";
import "./Directorio.css";
import Navbar from "./Navbar";

const DEFAULT_PHOTO =
  "https://via.placeholder.com/96x96.png?text=UTP";

const AREAS = [
  {
    name: "Rectoría",
    entries: [
      {
        name: "Mtro. Alejandro Ramírez",
        role: "Rector",
        email: "rectoria@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "101",
        location: "Edificio A, 2° piso",
        photo:
          "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Lic. Mariana Torres",
        role: "Asistente de Rectoría",
        email: "asistente.rectoria@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "102",
        location: "Edificio A, 2° piso",
        photo:
          "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
  },
  {
    name: "Dirección Académica",
    entries: [
      {
        name: "Mtra. Beatriz López",
        role: "Directora Académica",
        email: "dir.academica@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "201",
        location: "Edificio B, 1° piso",
        photo:
          "https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Ing. Carlos Hernández",
        role: "Coordinación de Programas Académicos",
        email: "coord.programas@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "202",
        location: "Edificio B, 1° piso",
        photo:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
  },
  {
    name: "Servicios Escolares",
    entries: [
      {
        name: "Lic. Sofía Delgado",
        role: "Jefatura de Servicios Escolares",
        email: "servicios.escolares@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "301",
        location: "Edificio C, planta baja",
        photo:
          "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Lic. Jorge Martínez",
        role: "Control Escolar",
        email: "control.escolar@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "302",
        location: "Edificio C, planta baja",
        photo:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
  },
  {
    name: "Vinculación",
    entries: [
      {
        name: "Mtro. Daniela Pérez",
        role: "Dirección de Vinculación",
        email: "vinculacion@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "401",
        location: "Edificio D, 2° piso",
        photo:
          "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Lic. Luis Gómez",
        role: "Bolsa de Trabajo y Estadías",
        email: "estadias@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "402",
        location: "Edificio D, 2° piso",
        photo:
          "https://randomuser.me/api/portraits/men/32.jpg",
      },
    ],
  },
  {
    name: "Soporte y TI",
    entries: [
      {
        name: "Ing. Paola Rivera",
        role: "Soporte Técnico",
        email: "soporte.ti@utpuebla.edu.mx",
        phone: "(222) 000 0000",
        extension: "501",
        location: "Edificio de Cómputo",
        photo:
          "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
  },
];

const Directorio = () => {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredAreas = AREAS.map((area) => {
    if (!normalizedQuery) return area;
    const filteredEntries = area.entries.filter((entry) => {
      const inArea = area.name.toLowerCase().includes(normalizedQuery);
      const inName = entry.name.toLowerCase().includes(normalizedQuery);
      const inRole = entry.role.toLowerCase().includes(normalizedQuery);
      const inEmail = entry.email.toLowerCase().includes(normalizedQuery);
      const inExt = entry.extension.toLowerCase().includes(normalizedQuery);
      return inArea || inName || inRole || inEmail || inExt;
    });

    return { ...area, entries: filteredEntries };
  }).filter((area) => area.entries.length > 0);

  return (
    <div className="directorio">
      {/* NAVBAR GLOBAL */}
      <Navbar />

      {/* CONTENIDO DE LA PÁGINA */}
      <main className="directorio-main">
        {/* HERO / ENCABEZADO */}
        <section className="directorio-hero">
          <div className="directorio-shell directorio-hero-grid">
            <div>
              <p className="directorio-kicker">Directorio institucional</p>
              <h1 className="directorio-title">
                Encuentra al área o persona indicada.
              </h1>
              <p className="directorio-subtitle">
                Consulta los datos de contacto de las principales áreas
                académicas y administrativas de la Universidad Tecnológica de
                Puebla.
              </p>

              <div className="directorio-search">
                <input
                  type="text"
                  className="directorio-search-input"
                  placeholder="Buscar por nombre, área, correo o extensión"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="directorio-search-btn"
                  onClick={() => {}}
                >
                  Buscar
                </button>
              </div>

              <div className="directorio-tags">
                <span className="directorio-tag-label">
                  Búsquedas rápidas:
                </span>
                <button
                  type="button"
                  className="directorio-tag"
                  onClick={() => setQuery("servicios escolares")}
                >
                  Servicios Escolares
                </button>
                <button
                  type="button"
                  className="directorio-tag"
                  onClick={() => setQuery("vinculación")}
                >
                  Vinculación
                </button>
                <button
                  type="button"
                  className="directorio-tag"
                  onClick={() => setQuery("soporte")}
                >
                  Soporte y TI
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LISTADO DEL DIRECTORIO */}
        <section className="directorio-list">
          <div className="directorio-shell">
            {filteredAreas.length === 0 ? (
              <p className="directorio-empty">
                No se encontraron resultados para{" "}
                <strong>{query}</strong>. Intenta con otro nombre, área o
                extensión.
              </p>
            ) : (
              filteredAreas.map((area) => (
                <div key={area.name} className="directorio-section">
                  <header className="directorio-section-header">
                    <h2 className="directorio-section-title">{area.name}</h2>
                    <p className="directorio-section-subtitle">
                      Información de contacto del área.
                    </p>
                  </header>

                  <div className="directorio-grid">
                    {area.entries.map((entry) => (
                      <article
                        key={entry.email + entry.extension}
                        className="directorio-card"
                      >
                        <header className="directorio-card-header">
                          <div className="directorio-card-avatar">
                            <img
                              src={entry.photo || DEFAULT_PHOTO}
                              alt={`Foto de ${entry.name}`}
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h3 className="directorio-card-name">
                              {entry.name}
                            </h3>
                            <p className="directorio-card-role">
                              {entry.role}
                            </p>
                          </div>
                        </header>

                        <ul className="directorio-card-data">
                          <li>
                            <span className="directorio-data-label">
                              Correo:
                            </span>
                            <a
                              href={`mailto:${entry.email}`}
                              className="directorio-data-value directorio-link"
                            >
                              {entry.email}
                            </a>
                          </li>
                          <li>
                            <span className="directorio-data-label">
                              Teléfono:
                            </span>
                            <span className="directorio-data-value">
                              {entry.phone} ext. {entry.extension}
                            </span>
                          </li>
                          <li>
                            <span className="directorio-data-label">
                              Ubicación:
                            </span>
                            <span className="directorio-data-value">
                              {entry.location}
                            </span>
                          </li>
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* SECCIÓN DE AYUDA */}
        <section className="directorio-help">
          <div className="directorio-shell directorio-help-inner">
            <div>
              <h2 className="directorio-help-title">
                ¿No encuentras a quién contactar?
              </h2>
              <p className="directorio-help-text">
                Si tienes dudas generales sobre la universidad, procesos de
                admisión o servicios, puedes escribirnos y te canalizaremos con
                el área correspondiente.
              </p>
            </div>
            <a href="/contacto" className="directorio-help-btn">
              Ir al formulario de contacto
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Directorio;
    