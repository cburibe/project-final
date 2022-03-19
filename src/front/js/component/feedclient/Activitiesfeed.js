import React from "react";
import { FaHiking, FaSnowboarding, FaBiking, FaSwimmer } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import "../../../styles/feedclient/Activitiesfeed.css";
import { Link } from "react-router-dom";

const Activitiesfeed = () => {
  return (
    <div className="activities_feed float-end  me-5">
      <div id="activi" className="btn-group-vertical">
        <ul className="nav flex-column">
          <li className="nav-item">
            <i>
              <h4 className="Activitiesfeed_h2">Actividades Cercanas:</h4>
            </i>
            <Link className="nav-link active" to="/map">
              <FaBiking className="icon_activitifeed" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaSwimmer className="icon_activitifeed" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaSnowboarding className="icon_activitifeed" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaHiking className="icon_activitifeed" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <GiMountainClimbing className="icon_activitifeed" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Activitiesfeed;
