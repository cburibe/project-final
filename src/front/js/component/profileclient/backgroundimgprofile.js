import React from "react";
import PropTypes from "prop-types";
import { Imgprofile } from "../profileclient/frontimgprofile";
import { GiHouse } from "react-icons/gi";
import { FaSearchLocation } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { ImBin } from "react-icons/im";
import { MdOutlineAddCircle } from "react-icons/md";
import "../../../styles/profileclient/backgroundimgprofile.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
export const Imgbackground = (props) => {
  return (
    <>
      <IconContext.Provider value={{ color: "black", size: 50 }}>
        <div
          className=" backgroundimg "
          style={{
            background: "url(https://picsum.photos/200/300?grayscale)",
            height: "25rem",
          }}
        >
          <Link className="nav-link active " to="/feed">
            <span type="button" className="houseicon ms-0 ">
              <GiHouse />
            </span>
          </Link>

          <span type="button" className=" location2icon ">
            <FaSearchLocation />
          </span>
          <span
            type="button"
            className=" settingsicon d-flex justify-content-end  "
          >
            <FiSettings />
          </span>
          <Imgprofile linkImageFrony="https://picsum.photos/200" />
        </div>

        <span type="button" className=" binicon ms-4 ">
          <ImBin />
        </span>
        <span type="button" className=" addicon  ms-4">
          <MdOutlineAddCircle />
        </span>
      </IconContext.Provider>
    </>
  );
};

Imgbackground.propTypes = {
  linkImage: PropTypes.any,
};

export default Imgbackground;
