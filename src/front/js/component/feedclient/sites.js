import React from "react";
import { IconContext } from "react-icons";
import { FaHotel } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import "../../../styles/feedclient/sites.css";
export const Site = () => {
  return (
    <>
      <div id="site" className="sites mt-5">
        <IconContext.Provider value={{ color: "black", size: 50 }}>
          <span type="button" className=" hotel mt-5">
            <FaHotel />
            Hoteles recomendados
          </span>
          <span type="button" className="location mt-5">
            <FaSearchLocation />
            Lugares que debes visita
          </span>
          <span type="button" className="route mt-5">
            <FaRoute />
            inicia tu viaje (traza tu ruta)
          </span>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Site;
