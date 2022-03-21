import React from "react";
import "../../../styles/feedclient/search.css";
import { BiImageAdd } from "react-icons/bi";
import { RiProfileFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Searching = () => {
  return (
    <>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossOrigin="anonymous"
      />
      <div className="container mt-4">
        <div className="d-flex justify-content-center ">
          <Link className="nav-link active " to="publication_uploader">
            <button type="button" className=" add rounded-circle btn btn-dark">
              <BiImageAdd className="button_add" />
            </button>
          </Link>

          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="search for users ..."
            />

            <a href="#" className="search_icon">
              <i className="fas fa-search" />
            </a>
          </div>
          <Link className="nav-link active " to="/profile">
            <button
              type="button"
              Link
              to="/profile"
              className=" btn btn-dark profile rounded-circle "
            >
              <RiProfileFill className="button_profile" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Searching;
