import React from "react";
import ReactPlayer from "react-player";
import "../fotos/muestras.css";

const Muestras = ({ imgs }) => {
  return (
    <div className="fotos">
      <div className="masonry">
        <div className="item">
          <img src={imgs.urlImagen1} />
          <p className="description">¡Conoce gente en tus viajes !</p>
        </div>
        <div className="item">
          <img src={imgs.urlImagen2} />
          <p className="description">
            Visita lugares Populares y Recomendados{" "}
          </p>
        </div>

        <div className="item">
          <ReactPlayer
            className="react-player"
            playing
            muted
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=ZVQeTagj0AI&ab_channel=Ecolog%C3%ADaVerde"
          />
          <p className="description">Comparte tus rutas!!</p>
        </div>
        <div className="item">
          <img src={imgs.urlImagen3} />
          <p className="description">¡Obten descuentos al registrarte!</p>
        </div>

        <div className="item">
          <img src={imgs.urlImagen4} />
          <p className="description">¡Planifica tu viaje!</p>
        </div>

        <div className="item">
          <img src={imgs.urlImagen5} />
          <p className="description">¡Comparte tu contenido!</p>
        </div>
      </div>
    </div>
  );
};
export default Muestras;
