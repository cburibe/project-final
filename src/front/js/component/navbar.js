import React from "react";
import "../../styles/navbar.css";

export const NavMain = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-none pb-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              id="navs"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Mapa turismo
            </a>
            <a id="navs" className="nav-link" href="#">
              Recomendado visitar
            </a>
            <a id="navs" className="nav-link" href="#">
              Hoteles recomendados
            </a>
            <a id="navs" className="nav-link" href="#">
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
