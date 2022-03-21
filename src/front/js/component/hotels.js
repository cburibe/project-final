import React from "react";
import { IoStarSharp } from "react-icons/io5";

export const Hotels = () => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="stars">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </div>
        <div className="col-md-4">
          <img
            src="https://picsum.photos/id/1029/200/200"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Hotel de ejemplo</h5>
            <p className="card-text">Descripcion del hotel</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-3">
            <p>
              ajskljakljasklajklskasklasjaklkas
              <br />
              cakejrkoakljapkodrkltjjekldjsklj
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
