// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../pages/Inicio.css"; // Reutilizamos los estilos ya definidos


import logoUTP from "../assets/Logo.png"; 

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    // Si manejas "/" como inicio, puedes considerar ambos:
    if (path === "/inicio") {
      return location.pathname === "/inicio" || location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <header className="inicio-header">
      <div className="inicio-shell inicio-header-inner">
        {/* Marca / Logo */}
        <div className="inicio-brand">
          <img
            src={logoUTP}
            alt="Logotipo de la Universidad Tecnológica de Puebla"
            className="inicio-brand-logo"
          />
          <div className="inicio-brand-text">
            <span className="inicio-brand-kicker">
              Universidad Tecnológica de Puebla
            </span>
            <span className="inicio-brand-name">UTPuebla</span>
          </div>
        </div>

        {/* Navegación principal */}
        <nav className="inicio-nav">
          <Link
            to="/inicio"
            className={
              "inicio-nav-link " +
              (isActive("/inicio") ? "inicio-nav-link--active" : "")
            }
          >
            Inicio
          </Link>
          <Link
            to="/directorio"
            className={
              "inicio-nav-link " +
              (isActive("/directorio") ? "inicio-nav-link--active" : "")
            }
          >
            Directorio
          </Link>
          
          <Link
            to="/oferta"
            className={
              "inicio-nav-link " +
              (isActive("/oferta") ? "inicio-nav-link--active" : "")
            }
          >
            Oferta educativa
          </Link>
          
        </nav>

        {/* Acciones */}
        <div className="inicio-actions">
          <Link to="/contacto" className="inicio-btn inicio-btn--outline">
            Contacto
          </Link>
          <Link to="/aspirantes" className="inicio-btn inicio-btn--primary">
            Portal aspirantes
          </Link>
        </div>

        {/* Botón hamburguesa (por ahora visual, listo para que luego le agreguemos menú móvil) */}
        <button
          className="inicio-menu-toggle"
          type="button"
          aria-label="Abrir menú principal"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
