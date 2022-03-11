import React from "react";
import { FaHiking, FaSnowboarding, FaBiking, FaSwimmer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GiMountainClimbing } from "react-icons/gi";
import "./main.css";

const Actividades = () => {
  return (
    <div id="activi" className="actividad col-md-1 ps-5">
      <IconContext.Provider value={{ color: "black", size: 42 }}>
        <FaHiking />
        Treking
        <FaBiking />
        Ciclismo
        <FaSnowboarding />
        Snowbord
        <FaSwimmer />
        Nado
        <GiMountainClimbing />
        Montañismo
      </IconContext.Provider>
    </div>
  );
};

export default Actividades;
