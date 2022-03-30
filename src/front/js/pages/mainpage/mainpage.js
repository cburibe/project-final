import React from "react";
import { NavMain } from "../../component/navbar";
import Seccion1 from "./seccion1";
import Seccion2 from "./seccion2";
import Seccion3 from "./seccion3";
import Seccion4 from "./seccion4";
import Seccion5 from "./seccion5";
import Seccion6 from "./seccion6";
import Seccion7 from "./seccion7";
import "/workspace/project-final/src/front/styles/Main.css";

const Mainpage = () => {
  return (
    <div id="contenedor" className="container-fluid">
      <h1 id="titulo" className="pt-5 ps-5">
        TurismoSocial
      </h1>
      <div className="R order-2">
        <span className="logs ps-5 mb-5">Registro</span>
      </div>
      <div className="L order-1">
        <span className="logs mb-5">Ingresar</span>
      </div>
      <div className="row row-cols-12 row-cols-lg-12 align-items-stretch mt-5  py-5">
        <div className="col-md-12 mb-5">
          <NavMain />
        </div>
      </div>

      <div className="row row-cols-12 row-cols-lg-12 bg-light">
        <Seccion1 />

        <div id="Somos" className="row row-cols-1 row-cols-lg-3 ">
          <Seccion2 />
        </div>
        <div className="row row-cols-1 row-cols-lg-3  mx-auto py-5 bg-light">
          <Seccion3 />
        </div>
        <div className="hotelsection col-lg-12 col-md-12 mx-auto ">
          <div className="starthotel">
            <h2 className="explora ms-5 ">EXPLORA</h2>
            <p className="parrafo fs-4 ">
              Existen varios medios de transporte <br />
              pero nada mejor que un buen <br /> momento de descanso entre tus
              viajes
            </p>
          </div>
        </div>
        <Seccion4 />
        <Seccion5 />
        <Seccion6 />
        <Seccion7 />
      </div>
    </div>
  );
};

export default Mainpage;
