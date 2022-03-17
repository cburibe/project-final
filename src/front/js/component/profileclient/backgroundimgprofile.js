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
  // const Propsimgbackground = {
  //   linkImageback: "https://picsum.photos/200/300?grayscale",
  //   imagepost: "https://picsum.photos/200/300",
  //   user1: "carlos",
  //   caption: "Mi primera foto",
  // };
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
            <GiHouse className="houseicon_Imgbackground ms-0" />
          </Link>
          <Link className="nav-link active " to="/map">
            <FaSearchLocation className=" location2icon_Imgbackground " />
          </Link>

          <Link to="/config">
            <FiSettings className=" settingsicon_Imgbackground d-flex justify-content-end  " />
          </Link>
          <Imgprofile linkImageFrony="https://picsum.photos/200" />

          <span type="button" className=" Imgbackground_binicon ms-4 ">
            <ImBin />
          </span>
          <Link to="/publication-uploader">
            <MdOutlineAddCircle className="Imgbackground_addicon  ms-4" />
          </Link>
        </div>
      </IconContext.Provider>
    </>
  );
};

Imgbackground.propTypes = {
  linkImage: PropTypes.any,
};

export default Imgbackground;
