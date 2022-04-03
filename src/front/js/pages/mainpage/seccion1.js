import React from "react";
import MyMap from "../Map/view.map";
import { FaHiking, FaSnowboarding, FaBiking, FaSwimmer } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import MyMapsnow from "../Map/snowboard";
import MyMapSwim from "../Map/swim";
import "/workspace/project-final/src/front/styles/Main.css";

const Seccion1 = () => {
  return (
    <>
      <nav id="actividades" className="d-flex justify-content-center">
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
      <div className="tab-content pt-4" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <MyMap name="act" className="" />
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
    </>
  );
};
export default Seccion1;
