import React from "react";
import { FiMapPin, FiUser, FiImage } from "react-icons/fi";
import {
  MdHome,
  MdOutlineSettingsApplications,
  MdOutlineRunCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "/workspace/project-final/src/front/styles/perfiluser.css";

const Perfil = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <MdHome className="iconhouse justify-content-between" />
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
                  <h4 className="mt-0 mb-0">elsa capuntas</h4>
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
            <div className="py-4 px-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
