import React, { useContext, useEffect, useRef, useState } from "react";
import Searching from "../../../component/feedclient/Search";
import Post from "./newpost";
import "/workspace/project-final/src/front/styles/newfeed.css";
import { Context } from "../../../store/appContext";

const Feed = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function userAllInfo() {
      await actions.getAllUserInfo();
    }
    async function getAllPost() {
      await actions.getAllUserPosts();
    }
    async function getAll_Places() {
      await actions.getPlaces();
    }
    userAllInfo();
    getAllPost();
    getAll_Places();
    console.log(userAllInfo() ,getAllPost() ,getAll_Places())
  }, []);
  return (
  
    <div id="feed" className="row">
      <div className="col-md-12 mx-auto">
        <Searching />
      </div>
      <Post user1={store.userAll.username} imgURL="https://images.pexels.com/photos/2819587/pexels-photo-2819587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post imgURL="https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
      <Post imgURL="https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
  );
};
export default Feed;
