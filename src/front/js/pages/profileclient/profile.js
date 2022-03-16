import React from "react";
import "../../../styles/profileclient/profile.css";
import { Imgbackground } from "../../component/profileclient/backgroundimgprofile.js";
import { Cardimg } from "../../component/profileclient/cartaimg.js";

export const Profile = (props) => {
  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-md-12 imgbackground px-0">
          <Imgbackground
            linkImageFrony={"https://picsum.photos/200/300?grayscale"}
          />
        </div>
      </div>
      <div className="row ">
        <Cardimg
          imagepost={"https://picsum.photos/200/300"}
          user1={"carlos"}
          caption={"Mi primera foto"}
        />
        <Cardimg
          imagepost={"https://picsum.photos/200/300"}
          user1={"carlos"}
          caption={"Mi primera foto"}
        />
        <Cardimg
          imagepost={"https://picsum.photos/200/300"}
          user1={"carlos"}
          caption={"Mi primera foto"}
        />
        <Cardimg
          imagepost={"https://picsum.photos/200/300"}
          user1={"carlos"}
          caption={"Mi primera foto"}
        />
      </div>
    </div>
  );
};
