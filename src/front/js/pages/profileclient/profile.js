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
  const [imageSrc, setImageSrc] = React.useState(null);

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
    try {
      await actions.createPost(text, params.username);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async (image) => {
    const data = await fetch()
  };
  const readFile = (file)=>{
    return new Promise((resolve)=>{
      const reader = new FileReader()
      reader.addEventListener('load',()=>resolve(reader.result),false)
      reader.readAsDataURL(file)
    })
  }
  const onFileChange = (e) => {
      const file = e.target.files[0];
      actions.convertBase64(file)
    
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
          {/*<div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Lugar
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="lugar"
            />
          </div>*/}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              foto de perfil
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              name="file"
              accept="image/png, .jpg, .jpeg"
              onChange={e=>onFileChange(e)}
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
