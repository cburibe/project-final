import React from "react";
import FormRegistro from "../formulario/registro.js";

const Modaluser = () => {
  return (
    <>
      <div className="cont-reg">
        <button
          type="button"
          className="button-53"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          User
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
    </>
  );
};

export default Modaluser;
