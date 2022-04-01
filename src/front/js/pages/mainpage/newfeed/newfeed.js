import React from "react";
import Searching from "../../../component/feedclient/Search";
import Post from "./newpost";
import "/workspace/project-final/src/front/styles/newfeed.css";

const Feed = () => {
  return (
    <div id="feed" className="row">
      <div className="col-md-12 mx-auto">
        <Searching />
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default Feed;
