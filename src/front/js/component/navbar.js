import React from "react";
import ModalLogin from "../pages/formulario/modallogin";
import Modalregistro from "../pages/formulario/modalregistro";
import { FaHiking, FaSnowboarding, FaBiking, FaSwimmer } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import "../../styles/navbar.css";

export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TURISMOSOCIAL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ModalLogin />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Modalregistro />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ACTIVIDADES CERCANAS
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <FaHiking className="icon" />
                    <p className="texto">Hiking</p>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaSnowboarding className="icon" />
                    <p className="texto">Snowboarding</p>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <FaBiking className="icon" />
                    <p className="texto">Ciclismo</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
