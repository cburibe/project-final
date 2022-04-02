import React from "react";
import "/workspace/project-final/src/front/styles/Main.css";

const Seccion3 = () => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 text-center ">
        <div className="card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg">
          <img
            className="img-fluid"
            src="https://www.terram.cl/wp-content/uploads/2015/07/PARQUE-NACIONAL-TORRES-DEL-PAINE-2-555x330.jpg"
          />
          <h4 className="text-dark">Parque Nacional Torres del Paine</h4>
          <div className="d-flex justify-content-between ">
            <p className="text-dark px-3">
              Sin duda uno de los parques nacionales más espectaculares del
              país, la variedad de especies vegetales y animales, unido a sus
              maravillosos atractivos escénicos y a su agreste geografía, lo
              convierten en uno de los más apetecidos por los amantes de la
              ecología y de los deportes aventura. Cuenta con una gran
              implementación que facilita y da seguridad en su recorrido.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg">
          <img
            className="img-fluid"
            src="https://assets.eldesconcierto.cl/2019/03/rapa-nui.jpg"
          />
          <h4 className="text-dark">Rapa Nui</h4>
          <div className="d-flex justify-content-between ">
            <p className="text-dark px-3">
              En la región de Valparaíso , la Isla de Pascua es el nexo de Chile
              con la Polinesia, un lugar que se aleja de las tradiciones del
              continente, con una cautivamente cultura y hermosos paisajes
              naturales.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg">
          <img
            className="img-fluid"
            src="https://vulcanopro.s3.amazonaws.com/images/lar_ItVPmCuK585vveCSxSAFr1Yp54feJPVtFQfUFMLD.png"
          />
          <h4 className="text-dark">Carretera Austral</h4>
          <div className="d-flex justify-content-between ">
            <p className="text-dark px-3">
              La Carretera Austral Sur comienza en Coyhaique y termina Puerto
              williams. Este es un recorrido que presenta diversos paisajes,
              como los Campos de Hielo, Reservas y Parques Nacionales. Se
              caracteriza por sus hermosos paisajes verdes, las aguas
              cristalinas de los lagos que tiene y los imponentes paisajes que
              brindan los diversos glaciares de la zona.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seccion3;
