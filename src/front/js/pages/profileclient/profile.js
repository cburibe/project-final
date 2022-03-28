import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/profileclient/profile.css";
import { Imgbackground } from "../../component/profileclient/backgroundimgprofile.js";
import { Cardimg } from "../../component/profileclient/cartaimg.js";
import { Context } from "../../store/appContext";

export const Profile = (props) => {
  const params = useParams();
  const { actions } = useContext(Context);
  const input_text = useRef(null);
  const input_place = useRef(null);
  const input_photo = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    async function getInfo() {
      await actions.userInfo();
    }
    async function getPosts(username) {
      await actions.getUserPosts(username);
    }
    console.log(params.username);
    getInfo();
    getPosts(params.username);
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    let text = input_text.current.value;
    let place = input_place.current.value;
    let photo = input_photo.current.value;
    try {
      await actions.createPost(text, place, params.username);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row mx-0">
        <div className="col-md-12 imgbackground px-0">
          <Imgbackground />
        </div>
      </div>
      <div
        className="btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        este es un boton
      </div>
      {show && (
        <>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Texto
            </label>
            <input
              type="text"
              class="form-control"
              ref={input_text}
              id="exampleFormControlInput1"
              placeholder="comentario"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Lugar
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="lugar"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              foto
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="foto"
            />
          </div>
          <div className="btn btn-primary" onClick={(e) => handleCreatePost(e)}>
            crear post
          </div>
        </>
      )}
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
