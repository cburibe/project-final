import React from "react";
import ImageSlidere from "../../carousel/carouselV";
import { Sliderimg } from "../../carousel/storeimg";
import Actividades from "../../actividades/main";
import Muestras from "../../videos/muestras";
import "../mainpage/mainpage.css";

export const Mainpage = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-10 col-sm-6 ps-5">
            <ImageSlidere slides={Sliderimg} />
          </div>
          <div className="col-md-2 mt-5  pt-4">
            <Actividades />
          </div>
        </div>
      </div>

      <div className="col-md-12 ps-5">
        <Muestras />
      </div>
    </>
  );
};
