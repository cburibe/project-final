import React from "react";
import "../../../styles/profileclient/cartaimg.css";
import { GrMapLocation } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export const Cardimg = (props) => {
  return (
    <>
      <div className="col-md-4 pt-5 ">
        <div className="post">
          <div className="card-header">
            <CgProfile className="post__avatar" alt="Random" src="" />
            <h4>{props.user1}</h4>
          </div>
          <div className=" card-post">
            <img
              src={props.imagepost}
              className="post__img img"
              alt={props.caption}
            />
          </div>
          <div className="card-body">
            <div className="buttons-post">
              <span type="button" className="heartcardicon ps-1">
                <FaHeart />
              </span>
              <span type="button" className="comment2cardicon ps-2">
                <BiComment />
              </span>
              <span type="button" className="locationcardicon ps-2 float-end">
                <GrMapLocation />
              </span>
            </div>
            <h5 className="post__description">
              <b>{props.user1}</b> "{props.caption}"
            </h5>

            <input
              aria-label="Add a comment"
              autoComplete="off"
              className="text-sm text-gray-base sizeinput mr-3 px-1 w-50 float-left"
              type="text"
              name="add-comment"
              placeholder="Add a comment..."
            />
            <button
              className="text-sm font-bold float-end button btn btn-light "
              type="button"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardimg;
