import React from "react";
import { FaHotel } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import "../../../styles/feedclient/Sitesfeed.css";
import { Link } from "react-router-dom";

const Sitesfeed = () => {
  return (
    <div className="Sitesfeed float-start">
      <div id="activi" className="btn-group-vertical Sitesfeed_div_icons">
        <ul className="nav flex-column">
          <li>
            <i>
              <h4 className="Sitesfeed_h2 float-none">Hoteles y rutas:</h4>
            </i>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/recommendedhotels">
              <FaHotel className="icon_Sitesfeed" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaSearchLocation className="icon_Sitesfeed" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sitesfeed;
