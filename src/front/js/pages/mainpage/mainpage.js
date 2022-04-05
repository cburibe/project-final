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
      <h1 id="titulo" className="pt-5 ps-5 fw-bold animate__animated animate__fadeIn animate__delay-2s">
        TurismoSocial
      </h1>
      <div className="R order-2">
        <Link className="link" to="/login">
          <span className="logs  mb-5 pb-5 d-flex justify-content-end ps-5 mb-5 animate__animated animate__fadeIn animate__delay-3s">Ingresar</span>
        </Link>
      </div>
      <div className="L order-1 ">
        <span className="logs ">
          <a className="regis mb-5 pb-5 d-flex justify-content-end animate__animated animate__fadeIn animate__delay-4s" href="#ancla-1">
            Registro
          </a>
        </span>
      </div>
      <div className="row mt-5 py-5">
        <div className="col-md-12 mt-5 animate__animated animate__fadeIn animate__delay-5s">
          <NavMain />
        </div>
      </div>
      <div className="row bg-light mt-5">
        <Seccion1 />
        </div>
        <div className="row bg-white">
          <Seccion2 />
          </div>
          <div className="row py-5 bg-light">
          <Seccion3 />
          </div>
        <div className="hotelsection col-lg-12 col-md-12 pb-3 mt-5 bg-white">
          <div className="starthotel">
            <h2 className="explora ms-5  me-auto p-2 bd-highlight ">
              EXPLORA
            </h2>
            <p className="parrafo fs-4 mb-2">
              Existen varios medios de transporte <br />
              pero nada mejor que un buen <br /> momento de descanso entre tus
              viajes
            </p>
          </div>
        </div>
        <Seccion4 className="row  mx-0 px-0" />
        <Seccion5  className="row mx-0 px-0"/>
        <Seccion6  className="row  mx-0 px-0"/>
        <Footer />
      </div>
  );
};

export default Mainpage;
