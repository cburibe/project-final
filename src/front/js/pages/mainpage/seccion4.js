import React from "react";
import "/workspace/project-final/src/front/styles/seccion4.css";

const Seccion4 = () => {
  return (
    <>
      <div
        id="seccion4"
        className="row align-items-stretch ps-5 mt-5 py-5 bg-white"
      >
        <a name="ancla-3"></a>
        <div className="col-sm-12 col-md-6 mx-auto">
          <h3 className="fs-1 mx-auto">Hospedaje Recomendado</h3>
        </div>
        <div className="under col-sm-12 col-md-6 pb-5 mx-auto">
          <img
            className="mb-5 img-fluid pb-3 ps-5"
            src="https://lh3.googleusercontent.com/9t--_gSvGZKm7ZCjpuri6d44RA6tiRDidtaz5CS5XqxLtXjf-wIjB8WMvxYH89xuqtkz7A=s101"
          />
        </div>
      </div>
      <div className="row bg-white">
        <div
          className="card mx-auto mb-3"
          style={{ maxWidth: 440 }}
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
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/317899720.jpg?k=ccfe17e664c39b2bce1fca4a41afad0022d0146cbf8370676a657f903293b83c&o=&hp=1"
                className="imagen img-fluid rounded-start"
              />
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card-body">
                <h5 className="card-title mt-3 fs-4">$15% de descuento</h5>
                <p className="card-text mt-5">Hotel Magnolia</p>
                <button className="regis4 mt-5 rounded">¡Registrate!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row g-0">
            <div className="col-md-7 col-sm-7">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/95496768.jpg?k=37da8dc8685f0260cee98fb5bfe76a779953d523fa5299a624dafabe22a34d7e&o=&hp=1"
                className="imagen img-fluid"
              />
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card-body">
                <h5 className="card-title mt-3 fs-4">$20% de descuento</h5>
                <p className="card-text mt-5">Hotel Boutique Castillo Rojo</p>
                <button className="regis4 mt-5 rounded">¡Registrate!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row g-0">
            <div className="col-md-7 col-sm-7" style={{ height: 440 }}>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/d5/dc/df/maison-italia-1029.jpg"
                className="imagen img-fluid rounded-start"
              />
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="card-body">
                <h5 className="card-title mt-3 fs-4">$30% de descuento</h5>
                <p className="card-text mt-5">Maison Italia 1029</p>
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
