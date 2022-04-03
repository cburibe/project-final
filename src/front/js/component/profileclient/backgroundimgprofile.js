import React from "react";
import { Imgprofile } from "../profileclient/frontimgprofile";
import { GiHouse } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Imgbackground = (props) => {
  const Propsimgbackground = {
    linkImageback: "https://picsum.photos/1600/1000?grayscale",
    imagepost: "https://picsum.photos/1600/1000",
    user1: "carlos",
    caption: "Mi primera foto",
    imgbackground: "https://picsum.photos/1600/1000",
  };
  return (
    <div className="divfondo position-relative">
      <img src={Propsimgbackground.imgbackground} className="fondo " />
      <Link to="/config">
        <button
          type="button"
          class=" Imgbackground_buttons_info d-flex justify-content-end position-relative position-absolute top-0 end-0 mt-2 me-4 btn-info rounded "
        >
          <FiSettings className="settingsicon_Imgbackground" />
        </button>
      </Link>

      <Link className="nav-link active " to="/feed">
        <button className="btn-info ms-0 position-relative position-absolute top-0 start-0 ms-4 mt-1 rounded">
          <GiHouse className="houseicon_Imgbackground " />
        </button>
      </Link>

      <Imgprofile linkImageFrony="https://picsum.photos/200" />
    </div>
  );
};

export default Imgbackground;
