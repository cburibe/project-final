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
    user1: props.user1,
    caption: props.caption,
  };
  return (
    <div className="card Cardimg_card">
      <div className="cardimg_div_header">
        <h5 className="Cardimg_h5 ps-2">{Propscardimg.user1}</h5>
      </div>
      <div className="Cardimg_divimg">
        <img
          src={Propscardimg.imagepost}
          className="card-img-top Cardimg_img "
          alt={Propscardimg.caption}
        />
      </div>
      <div className="card-body Cardimg_body">
        <div className="Cardimg_icons">
        </div>
        <div className="Cardimg_description p-1 py-3">
          <p className="fs-5">
            <b className="pe-1">{Propscardimg.user1}</b> {Propscardimg.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardimg;
