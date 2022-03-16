import React from "react";
import "../../../styles/feedclient/postprofile.css";
import { FaHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrMapLocation } from "react-icons/gr";

export const Post = (props) => {
  return (
    <div className="post_f m-0 row justify-content-center">
      <div className="post__feed ">
        <div className="card__header">
          <CgProfile className="post___avatar" alt="Random" src="" />
          <h4 className="ps-2">{props.user1}</h4>
        </div>
        <div className=" card_post">
          <img
            src={props.linkImagePost}
            className="post___img"
            alt={props.caption}
          />
        </div>
        <div className="card__body">
          <div className="buttons_post">
            <span type="button" className="heartcard_icon ps-3">
              <FaHeart />
            </span>
            <span type="button" className="comment2card_icon ps-2">
              <BiComment />
            </span>
            <span type="button" className="locationcard_icon pe-3 float-end">
              <GrMapLocation />
            </span>
          </div>
          <h5 className="post___description mb-0 ps-3 pb-3">
            <b>{props.user1}</b> "{props.caption}"
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
