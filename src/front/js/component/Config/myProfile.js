import React from "react";
import avatar from "../../avatar1.png";

export const MyProfile = () => {
  return (
    <>
      <form>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img
                src="https://res.cloudinary.com/dlb0fs0l8/image/upload/v1647197781/samples/people/boy-snow-hoodie.jpg"
                className="rounded-circle img-fluid"
                alt="..."
                style={{ width: "40%" }}
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
