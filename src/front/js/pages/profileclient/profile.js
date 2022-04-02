import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/profileclient/profile.css";
import { Imgbackground } from "../../component/profileclient/backgroundimgprofile.js";
import { Cardimg } from "../../component/profileclient/cartaimg.js";
import { Context } from "../../store/appContext";

export const Profile = (props) => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const input_text = useRef(null);
  const input_place = useRef(null);
  const input_photo = useRef(null);
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = React.useState(null);

  useEffect(() => {
    async function getInfo() {
      await actions.userInfo();
    }
    async function getPosts(username) {
      await actions.getUserPosts(username);
    }
    async function getAllPlaces() {
      await actions.getPlaces();
    }
    console.log(params.username);
    getInfo();
    getPosts(params.username);
    getAllPlaces();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    let text = input_text.current.value;
    let place = input_place.current.value;
    try {
      await actions.createPost(text, place, params.username);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async (image) => {
    const data = await fetch();
  };
  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };
  const onFileChange = (e) => {
    const file = e.target.files[0];
    actions.convertBase64(file);
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
        Añadir publicación
      </div>
      {show && (
        <>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Texto
            </label>
            <input
              type="text"
              className="form-control"
              ref={input_text}
              id="exampleFormControlInput1"
              placeholder="comentario"
            />
          </div>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            ref={input_place}
          >
            <option selected>seleccione lugar</option>
            {store.places.map((place, index) => {
              return (
                <option key={index} value={place.id}>
                  {place.name}
                </option>
              );
            })}
          </select>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Foto de perfil
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              name="file"
              accept="image/png, .jpg, .jpeg"
              onChange={(e) => onFileChange(e)}
            />
          </div>
          <div className="btn btn-primary" onClick={(e) => handleCreatePost(e)}>
            Crear post
          </div>
        </>
      )}
      <div className="row   mx-0">
        {store.user_posts.map((post, index) => {
          return (
            <div className="col-md-4" key={index}>
              <Cardimg caption={post.text} user1={store.user.username} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
