import React from "react";
import FormRegistro from "../pages/formulario/registro";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid pt-0">
        <h1 className="titulo">TurismoSocial</h1>

        <button
          type="button"
          className="button-53"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Register
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="modal-body">
                <FormRegistro />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
