import React from "react";
import "../../../styles/profileclient/cartaimg.css";
import { GrMapLocation } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export const Cardimg = (props) => {
  const Propscardimg = {
    linkImageFrony: "https://picsum.photos/200/300?grayscale",
    imagepost: "https://picsum.photos/200/300",
    user1: "carlos",
    caption: "Mi primera foto",
  };
  return (
    <>
      <div className="col-md-4 pt-5 ">
        <div className=" cartaimg_post">
          <div className="cartaimg_div_header">
            <CgProfile className="cartaimg_avatar ps-2" alt="Random" src="" />
            <h5>{Propscardimg.user1}</h5>
          </div>
          <div className="cartaimg_div_img">
            <img
              src={Propscardimg.imagepost}
              className="cartaimg_img"
              alt={Propscardimg.caption}
            />
          </div>
          <div className="cartaimg_body">
            <div className="cartaimg_buttons_post">
              <span type="button" className="cartaimg_heartcardicon ps-2 pt-1">
                <FaHeart />
              </span>
              <span
                type="button"
                className="cartaimg_comment2cardicon ps-2 pt-1"
              >
                <BiComment />
              </span>
              <Link to="/map">
                <GrMapLocation className="cartaimg_locationcardicon pe-2 mt-2 float-end" />
              </Link>
            </div>
            <h5 className="cartaimg_post__description ps-1 mb-0">
              <b>{Propscardimg.user1}</b> "{Propscardimg.caption}"
            </h5>

            {/* <input
              aria-label="Add a comment"
              autoComplete="off"
              className="cartaimg_input mr-3 px-1 w-50 float-left"
              type="text"
              name="add-comment"
              placeholder="Add a comment..."
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardimg;
