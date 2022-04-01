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
      <Post imgURL="https://images.pexels.com/photos/2819587/pexels-photo-2819587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post imgURL="https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
      <Post imgURL="https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
  );
};
export default Feed;
