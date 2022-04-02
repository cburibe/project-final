import React from "react";
import "../../../styles/ConfigComp/myprofile.css";

export const MyProfile = () => {
  return (
    <>
      <form className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img
                src="https://images.pexels.com/photos/1547094/pexels-photo-1547094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="img-fluid img-profile"
                style={{ width: "50%" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col text-center my-2">
              <input
                style={{ width: "40%" }}
                value="Claudio Uribe"
                className="text-center"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Nombre
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Genero
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Masculino</option>
                  <option value="1">Femenino</option>
                  <option value="2">No definido</option>
                  <option value="3">Prefiero no decir</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Sobre ti
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <div class="text-center my-4">
                  <button type="submit" className="btn btn-primary mb-3">
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
