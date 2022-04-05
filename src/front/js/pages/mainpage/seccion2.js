import React from "react";
import "animate.css";
import "/workspace/project-final/src/front/styles/Main.css";

const Seccion2 = () => {
  return (
    <>
      <div className="col-sm-4 col-md-6 col-lg-8 text-center">
        <div className="welcome">
          <p className="text-start ps-5 pt-2">
            Somos TurismoSocial
            <br />
            Bienvenid@s
          </p>
          <h3 className="fs-2 ps-5 text-start animate__animated animate__pulse animate__delay-2s">
            Tomate un viaje!...
          </h3>
          <p className="fs-4 ps-5 pt-1 animate__animated animate__pulse animate__delay-3s">
            Registrate y prueba lo diferente y tentador.!
            <br />
            Dentro de nuestros servicios y <br />
            paquetes turísticos encontraras <br />
            todo lo que puedas imaginar.
          </p>
        </div>
      </div>
      <div className="col-sm-8 col-md-6 col-lg-4 ">
        <img
          className="img1 pt-2 img-fluid"
          src="https://nonvillage.jp/wp-content/uploads/2020/10/pexels-photo-4555613-e1604067660553.jpeg"
        />
      </div>
    </>
  );
};

export default Seccion2;
