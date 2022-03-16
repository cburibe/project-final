// import React, { useState } from "react";
import React from "react";
import "../../../styles/feedclient/feed.css";
import { Post } from "../../component/feedclient/postprofile.js";
import { Actividades } from "../../component/feedclient/activities.js";
import { Site } from "../../component/feedclient/sites.js";
import Searching from "../../component/feedclient/Search";

export const Feed = (props) => {
  return (
    <div className="container-fluid  ">
      <div className="row ">
        <div className="col-md-3">
          <Site />
        </div>
        <div className="col-md-6  ">
          <Searching />

          <Post
            linkImagePost={"https://picsum.photos/seed/picsum/200/300"}
            user1="carlos"
            caption="Mi primera foto"
          />
          <Post
            linkImagePost={"https://picsum.photos/seed/picsum/200/300"}
            user1="carlos"
            caption="Mi primera foto"
          />
          <Post
            linkImagePost={"https://picsum.photos/seed/picsum/200/300"}
            user1="carlos"
            caption="Mi primera foto"
          />
        </div>
        <div className="col-3">
          <Actividades />
        </div>
      </div>
    </div>
  );
};
