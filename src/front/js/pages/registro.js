import React, { useState } from "react";
import "../../styles/home.css";

export const FormRegistro = () => {
  const [datos, setDatos] = useState({
    name: "",
    lastname: "",
  });
  const handleInputChange = (evento) => {
    setDatos({
      ...datos,
      [evento.target.value]: evento.target.value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center mt-5">
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            placeholder="Name"
            className="form-control"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            onChange={handleInputChange}
            name="lastname"
            type="text"
            placeholder="Lastname"
            className="form-control"
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            enviar
          </button>
        </div>
      </form>
    </div>
  );
};
