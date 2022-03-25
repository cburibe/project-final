import React from "react";
import { NavMain } from "../../component/navbar";
import MyMap from "../Map/view.map";
import { FaHiking, FaSnowboarding, FaBiking, FaSwimmer } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import "/workspace/project-final/src/front/styles/Main.css";
import MyMapsnow from "../Map/snowboard";
import MyMapSwim from "../Map/swim";

const Mainpage = () => {
  return (
    <div id="contenedor" className="container-fluid">
      <h1 className="titulo pt-5 ps-5">TurismoSocial</h1>
      <span className="logs">Registro</span>
      <br />
      <span className="logs">Ingresar</span>
      <div className="row row-cols-12 row-cols-lg-12 align-items-stretch g-4 py-5">
        <div className="col-md-12 mb-5">
          <NavMain />
        </div>
      </div>
      <div className="row row-cols-12 row-cols-lg-12 align-items-stretch g-4 py-5">
        <nav
          id="actividades"
          className="d-flex justify-content-center bg-success"
        >
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <FaBiking className="icon" />
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              <FaSnowboarding className="icon" />
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <FaSwimmer className="icon" />
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <MyMap className="" />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <MyMapsnow />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <MyMapSwim />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
