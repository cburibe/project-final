import React from "react";
import PropTypes from "prop-types";
import { MdFavorite } from "react-icons/md";
import "/workspace/project-final/src/front/styles/newfeed.css";

const Post = (props) => {
  return (
    <div className="post mb-3 mx-auto" style={{ maxWidth: 940 }}>
      <div className="row g-0 ">
        <div className="col-md-8">
          <img
            src={props.imgURL}
            className="img-fluid rounded-start"
            alt="..."
          />
          <p className="text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <div className="col-md-4 pt-5">
          <div className="body">
            <MdFavorite />
            <span className="likes fw-bold">10 likes</span>{" "}
            <table className="coment table">
              <tbody>
                <tr>
                  <th scope="row">Debora</th>
                  <td>
                    Se ven super bien con su familia. Sigan disfrutando de sus
                    vacaciones.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Dominik</th>
                  <td>Bonita foto, saludos!</td>
                </tr>
                <tr>
                  <th scope="row">Marcelo</th>
                  <td>
                    Muy lindo el lugar! me dieron ganas de visitarlo algun dia
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                defaultValue={""}
              />
              <label htmlFor="floatingTextarea">Leave a comment here</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  imgURL: PropTypes.string,
};

export default Post;
