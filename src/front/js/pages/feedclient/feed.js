// import React, { useState } from "react";
import React from "react";
import "../../../styles/feedclient/feed.css";
import { Post } from "../../component/feedclient/postprofile.js";
import Activitiesfeed from "../../component/feedclient/Activitiesfeed";
import Sitesfeed from "../../component/feedclient/Sitesfeed";
import Searching from "../../component/feedclient/Search";

export const Feed = (props) => {
  const Propspost = {
    linkImagePost: "https://picsum.photos/seed/picsum/200/300",
    user1: "carlos",
    caption: "Mi primera foto",
  };
  return (
    <div className="container-fluid  ">
      <div className="row ">
        <div className="col-md-3">
          <Sitesfeed />
        </div>
        <div className="col-md-6  ">
          <Searching />

          <Post />
        </div>
        <div className="col-3 float-end">
          <Activitiesfeed />
        </div>
      </div>
    </div>
  );
};
