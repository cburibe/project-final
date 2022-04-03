import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FiMapPin, FiUser, FiImage } from "react-icons/fi";
import { Cardimg } from "../../component/profileclient/cartaimg";
import { Context } from "../../store/appContext";
import {
  MdHome,
  MdOutlineSettingsApplications,
  MdOutlineRunCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "/workspace/project-final/src/front/styles/perfiluser.css";

const Perfil = () => {
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
    
      <div className="row">
        <div className="col-md-12 mx-auto">
          <Link className="link" to="/feed">
            <MdHome className="iconhouse justify-content-between" />
          </Link>
          <Link className="link" to="/">
            <MdOutlineRunCircle className="iconout ms-3" />
          </Link>
          <Link className="link" to="/config">
            <MdOutlineSettingsApplications className="iconconfig " />
          </Link>
          <div className="todo shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-5 cover">
              <div className="align-items-end profile-head">
                <div className="profi">
                  <img
                    src="https://images.pexels.com/photos/1547094/pexels-photo-1547094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="img-thumbnail"
                    width={170}
                  />
                </div>
                <div className="media-body mb-5 text-white">
                  <button
                    type="button"
                    className="boton btn btn-outline-success btn-sm"
                  >
                    change photo
                  </button>
                  <h4 className="mt-0 mb-0">{store.user.username}</h4>
                  <p className="small mb-4">
                    {" "}
                    <FiMapPin />
                    Santiago, Chile
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light p-2 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">6</h5>
                  <small className="text-muted">
                    {" "}
                    <FiImage />
                    Photos
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">745</h5>
                  <small className="text-muted">
                    {" "}
                    <FiUser />
                    Followers
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">340</h5>
                  <small className="text-muted">
                    {" "}
                    <FiUser />
                    Following
                  </small>
                </li>
              </ul>
            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0">About Me</h5>
              <div className="p-4 rounded shadow-sm bg-light">
                <p className="font-italic mb-0">Web Developer</p>
                <p className="font-italic mb-0">Lives in Santiago</p>
                <p className="font-italic mb-0">Photographer</p>
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
      </div>
      </div>
   
  );
};

export default Perfil;

            {/* <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent photos</h5>
              </div>
              <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/4641265/pexels-photo-4641265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                  <div className="card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </div>
              </div>
            </div>
 */}          
