import React from "react";
import "../../../styles/profileclient/profile.css";
import { Imgbackground } from "../../component/profileclient/backgroundimgprofile.js";
import { Cardimg } from "../../component/profileclient/cartaimg.js";

export const Profile = (props) => {
  return (
    <div className="container-fluid">
      <div className="row mx-0">
        <div className="col-md-12 imgbackground px-0">
          <Imgbackground />
        </div>
      </div>

      <div className="row   mx-0">
        <div className="col-md-4">
          <Cardimg />
        </div>
        <div className="col-md-4">
          <Cardimg />
        </div>
        <div className="col-md-4">
          <Cardimg />
        </div>
        <div className="col-md-4">
          <Cardimg />
        </div>
      </div>
    </div>
  );
};
