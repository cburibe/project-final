import React from "react";
import Modalregistro from "../pages/formulario/modalregistro";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="col-xs col-sm col-md-9 col-lg-12">
      <Modalregistro />
      <button>
        <Link className="nav-link active" to="/">
          go back
        </Link>
      </button>
    </nav>
  );
};
