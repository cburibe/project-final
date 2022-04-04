import React from "react";
import "../../../styles/feedclient/search.css";
import { MdAccountCircle } from "react-icons/md";
import {FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Searching = () => {
  return (
    <>
      <div id="search" className="container mx-auto pt-2">
        <div className="d-flex justify-content-center ">
          <div className="div_button_to_main">
            <Link className="nav-link active " to="/">
              <button
                type="button"
                className=" btn btn-dark tomain rounded-circle "
              >
                <FaSearchLocation className="button_to_main " />
              </button>
            </Link>
          </div>

          {/* <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="search for users ..."
            />

            <a href="#" className="search_icon">
              <i className="fas fa-search" />
            </a>
          </div> */}
          <div className="justify-content-end">
            <Link className="nav-link active " to="/perfil/:username">
              <button
                type="button"
                className=" btn btn-dark profile rounded-circle justify-content-end"
              >
                <MdAccountCircle className="button_profile " />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Searching;
