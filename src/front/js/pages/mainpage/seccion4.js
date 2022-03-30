import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import "/workspace/project-final/src/front/styles/seccion4.css";

const Seccion4 = () => {
  return (
    <>
      <div
        id="seccion4"
        className="row row-cols-12 row-cols-lg-12 align-items-stretch mt-5 py-5"
      >
        <div className="col-sm-12 col-md-6 ">
          <h3 className="fs-1">Hospedaje Recomendado</h3>
        </div>
        <div className="underline col-sm-12 col-md-6">
          <img
            className="mb-5 img-fluid"
            src="https://lh3.googleusercontent.com/9t--_gSvGZKm7ZCjpuri6d44RA6tiRDidtaz5CS5XqxLtXjf-wIjB8WMvxYH89xuqtkz7A=s101"
          />
          <BsFillHouseFill className="houseicon mt-4" />
        </div>
      </div>
      <div className="row row-cols-12 row-cols-lg-12 row-cols-sm-12 ">
        <div
          className="card mx-auto mb-3"
          style={{ maxWidth: 440, maxHeight: 500 }}
        >
          <div className="hotel row g-0">
            <div className="col-md-7 col-sm-7">
              <img
                id="hoteles"
                src="https://exp.cdn-hotels.com/hotels/23000000/22440000/22438500/22438422/42b32580_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                className="imagen img-fluid rounded-start"
              />
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card-body">
                <h5 className="card-title mt-3 fs-4">$30% de descuento</h5>
                <p className="card-text mt-5">Cajon del Maipo Lodge</p>
                <button className="regis4 mt-5 rounded">¡Registrate!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row g-0">
            <div className="col-md-7 col-sm-7">
              <img
                src="https://exp.cdn-hotels.com/hotels/23000000/22440000/22438500/22438422/42b32580_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                className="imagen img-fluid rounded-start"
              />
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card-body">
                <h5 className="card-title mt-3 fs-4">$30% de descuento</h5>
                <p className="card-text mt-5">Cajon del Maipo Lodge</p>
                <button className="regis4 mt-5 rounded">¡Registrate!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row g-0">
            <div className="col-md-7 col-sm-7">
              <img
                src="https://exp.cdn-hotels.com/hotels/23000000/22440000/22438500/22438422/42b32580_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                className="imagen img-fluid"
              />
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card-body">
                <h5 className="card-title mt-3 fs-4">$30% de descuento</h5>
                <p className="card-text mt-5">Cajon del Maipo Lodge</p>
                <button className="regis4 mt-5 rounded">¡Registrate!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row g-0">
            <div className="col-md-7 col-sm-7" style={{ height: 440 }}>
              <img
                src="https://exp.cdn-hotels.com/hotels/23000000/22440000/22438500/22438422/42b32580_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                className="imagen img-fluid rounded-start"
              />
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card-body">
                <h5 className="card-title mt-3 fs-4">$30% de descuento</h5>
                <p className="card-text mt-5">Cajon del Maipo Lodge</p>
                <button className="regis4 mt-5 rounded">¡Registrate!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Seccion4;
