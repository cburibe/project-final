import React from "react";
import ReactPlayer from "react-player";
import "../fotos/muestras.css";

const Muestras = ({ imgs }) => {
  return (
    <div className="fotos">
      <div className="masonry">
        <div className="item">
          <img src={imgs.urlImagen1} />
        </div>
        <div className="item">
          <img src={imgs.urlImagen2} />
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
        </div>
        <div className="item">
          <img src={imgs.urlImagen3} />
        </div>

        <div className="item">
          <img src={imgs.urlImagen4} />
        </div>

        <div className="item">
          <img src={imgs.urlImagen5} />
        </div>
      </div>
    </div>
  );
};
export default Muestras;
