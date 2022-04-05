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
    console.log(store.userAll)
  }, []);
  return (
  
    <div id="feed" className="row">
      <div className="col-md-12 mx-auto">
        <Searching />
      </div>
      <img className="w-25 mx-auto" src="https://res.cloudinary.com/dlb0fs0l8/image/upload/v1649140437/seccion-en-construccion_pj0c1s.png"/>
   </div>
  );
};
export default Feed;
