import React from "react";
import FormRegistro from "../formulario/registro.js";

const Modalregistro = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary 2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal 2"
      >
        Registro
      </button>

      <div
        className="modal fade 2"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel 2"
        aria-hidden="true"
      >
        <div className="modal-dialog 1">
          <div className="modal-content reg">
            <div className="modal-body reg">
              <FormRegistro />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modalregistro;
