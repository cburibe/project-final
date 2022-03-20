import React from "react";
import "../../styles/navbar.css";
import Login from "../pages/formulario/login";
import Modaluser from "../pages/formulario/modalregistro";

export const Menu = () => {
  return (
    <nav className="col-xs col-sm col-md-9 col-lg-12">
      <Login />
    </nav>
  );
};
