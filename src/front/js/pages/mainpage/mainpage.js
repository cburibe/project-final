import React from "react";
import ImageSlidere from "../../carousel/carouselV";
import { Sliderimg } from "../../carousel/storeimg";
import Actividades from "../../actividades/main";
import Muestras from "../../videos/muestras";
import "../mainpage/mainpage.css";

export const Mainpage = () => {
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
      <div className="row">
        <div className="col-xs col-sm col-md-6 col-lg-12"></div>
        <Muestras />
      </div>
    </>
  );
};
