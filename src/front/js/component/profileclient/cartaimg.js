import React from "react";
import "../../../styles/profileclient/cartaimg.css";
import { GrMapLocation } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";

export const Cardimg = (props) => {
  const Propscardimg = {
    linkImageFrony: "https://picsum.photos/1600/1000?grayscale",
    imagepost: "https://picsum.photos/1600/1000",
    user1: "carlos",
    caption: "Mi primera foto",
  };
  return (
    <div className="card Cardimg_card">
      <div className="cardimg_div_header">
        <h5 className="Cardimg_h5 ps-2">{Propscardimg.user1}</h5>
        <ImBin className="Cardimg_ImBin float-end  mt-1 me-1" />
      </div>
      <div className="Cardimg_divimg px-1">
        <img
          src={Propscardimg.imagepost}
          className="card-img-top Cardimg_img "
          alt={Propscardimg.caption}
        />
      </div>
      <div className="card-body Cardimg_body">
        <div className="Cardimg_icons">
          <FaHeart className="Cardimg_FaHeart " />
          <BiComment className="Cardimg_BiComment ms-2" />
          <Link to="/map">
            <GrMapLocation className="Cardimg_GrMapLocation float-end" />
          </Link>
        </div>
        <div className="Cardimg_description">
          <h5 className="cartaimg_post__description">
            <b>{Propscardimg.user1}</b> "{Propscardimg.caption}"
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Cardimg;
