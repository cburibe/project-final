import React from "react";
import ImageSlidere from "../../carousel/carouselV";
import { Sliderimg } from "../../carousel/storeimg";
import Actividades from "../../actividades/main";
import Muestras from "../../videos/fotos/muestras";
import "../mainpage/mainpage.css";
import Modaluser from "../formulario/modalregistro";
import ModalLogin from "../formulario/modallogin";

export const Mainpage = () => {
  const imgs = {
    urlImagen1: "https://picsum.photos/id/1039/800/500",
    urlImagen2: "https://picsum.photos/id/1044/800/500",
    urlImagen3: "https://picsum.photos/id/1050/800/500",
    urlImagen4: "https://picsum.photos/id/1057/800/500",
    urlImagen5: "https://picsum.photos/id/15/800/500",
  };
  return (
    <>
      <div className="header">
        <Modaluser />
        <ModalLogin />

        <h1 className="titulo">TurismoSocial</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <ImageSlidere slides={Sliderimg} />
          </div>
          <div className="col-md-1 mt-5 ms-5">
            <Actividades />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Muestras imgs={imgs} />
          </div>
        </div>
      </div>
    </>
  );
};
