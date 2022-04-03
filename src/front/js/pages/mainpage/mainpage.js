import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../component/footer";
import { NavMain } from "../../component/navbar";
import Seccion1 from "./seccion1";
import Seccion2 from "./seccion2";
import Seccion3 from "./seccion3";
import Seccion4 from "./seccion4";
import Seccion5 from "./seccion5";
import Seccion6 from "./seccion6";
import "animate.css";
import "/workspace/project-final/src/front/styles/Main.css";

const Mainpage = () => {
  return (
    <div id="contenedor" className="container-fluid">
      <h1 id="titulo" className="pt-5 ps-5">
        TurismoSocial
      </h1>
      <div className="R order-2">
        <Link className="link" to="/login">
          <span className="logs ps-5 mb-5">Ingresar</span>
        </Link>
      </div>
      <div className="L order-1">
        <span className="logs mb-5">
          <a className="regis" href="#ancla-1">
            Registro
          </a>
        </span>
      </div>
      <div className="row row-cols-12 row-cols-lg-12 align-items-stretch mt-5  py-5">
        <div className="col-md-12 mb-5">
          <NavMain />
        </div>
      </div>
      <div className="row row-cols-12 row-cols-lg-12 bg-light mt-5">
        <Seccion1 />
        </div>
        <div id="Somos" className="row row-cols-1 row-cols-lg-3">
          <Seccion2 />
          </div>
          <div className="row row-cols-1 row-cols-lg-3 mx-auto py-5 bg-light">
          <Seccion3 />
          </div>
        <div className="hotelsection col-lg-12 col-md-12 mx-auto bg-white">
          <div className="starthotel mx-auto">
            <h2 className="explora ms-5 animate__animated animate__backInUp animate__delay-5s">
              EXPLORA
            </h2>
            <p className="parrafo fs-4">
              Existen varios medios de transporte <br />
              pero nada mejor que un buen <br /> momento de descanso entre tus
              viajes
            </p>
          </div>
        </div>
        <Seccion4 />
        <Seccion5 />
        <Seccion6 />
        <Footer />
      </div>
  );
};

export default Mainpage;
