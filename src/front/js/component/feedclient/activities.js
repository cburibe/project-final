import React from "react";
import { FaHiking, FaSnowboarding, FaBiking, FaSwimmer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GiMountainClimbing } from "react-icons/gi";
import "../../../styles/feedclient/activities.css";

export const Actividades = () => {
  return (
    <div id="activi" className="actividad  mt-5">
      <IconContext.Provider value={{ color: "black", size: 50 }}>
        <span type="button" className="treking mt-5">
          <FaHiking />
          Treking
        </span>
        <span type="button" className="ciclismo mt-5">
          <FaBiking />
          Ciclismo
        </span>
        <span type="button" className="snowbord mt-5">
          <FaSnowboarding />
          Snowbord
        </span>
        <span type="button" className="sado mt-5">
          <FaSwimmer />
          Nado
        </span>
        <span type="button" className="montañismo mt-5">
          <GiMountainClimbing />
          Montañismo
        </span>
      </IconContext.Provider>
    </div>
  );
};

export default Actividades;
