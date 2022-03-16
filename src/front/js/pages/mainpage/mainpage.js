import React from "react";
import ImageSlidere from "../../carousel/carouselV";
import { Sliderimg } from "../../carousel/storeimg";
import Actividades from "../../actividades/main";
import Muestras from "../../videos/fotos/muestras";
import "../mainpage/mainpage.css";

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
        <h1 className="titulo">TurismoSocial</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs col-sm col-md-6 col-lg-10">
            <ImageSlidere slides={Sliderimg} />
          </div>
          <div className="col-md-1 mt-5  pt-4">
            <Actividades />
          </div>
        </div>
      </div>
      <div className="muestras row ms-5">
        <div className="col-md-12 col-lg-12 ms-5"></div>
        <Muestras imgs={imgs} />
      </div>
    </>
  );
};
