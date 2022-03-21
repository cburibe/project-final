import React from "react";
import "../../../styles/feedclient/postprofile.css";
import { FaHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Post = (props) => {
  const Propspost = {
    linkimagepost: "https://picsum.photos/seed/picsum/1600/1000",
    user1: "carlos",
    caption: "Mi primera foto",
  };
  return (
    <div className="card post_card justify-content-center px-1">
      <div className="cartaimg_div_header">
        <h4 className="post_h5 ">{Propspost.user1}</h4>
      </div>
      <div className="post_divimg">
        <img
          src={Propspost.linkimagepost}
          className="card-img-top Post_img "
          alt={Propspost.caption}
        />
      </div>
      <div className="card-body post_body">
        <div className="post_icons">
          <FaHeart className="post_FaHeart " />
          <BiComment className="post_BiComment ms-2" />
          <Link to="/map">
            <GrMapLocation className="post_GrMapLocation float-end" />
          </Link>
        </div>
        <div className="post_description ">
          <h5 className="post__description_h5">
            <b>{Propspost.user1}</b> "{Propspost.caption}"
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
