import React from "react";
import "../../../styles/feedclient/search.css";


import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export const Searching = () => {
  return (
    <>
      <div id="search" className="container mx-auto pt-2">
        <div className="d-flex justify-content-center ">
    

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
          <div className="justify-content-end">
            <Link className="nav-link active " to="/perfil/:username">
              <button
                type="button"
                Link
                to="/profile"
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
