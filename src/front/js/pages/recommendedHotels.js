import React from "react";
import { Hotels } from "../component/hotels";

export const RecommendedHotels = () => {
  return (
    <div>
      <h1 className="mx-4 my-3 text-center">Nuestra recomendación</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 d-flex justify-content-between my-3">
            <Hotels anfitrion="Casa bajo mena" />
            <Hotels />
            <Hotels />
            <Hotels />
            <Hotels />
            <Hotels />
            <Hotels />
            <Hotels />
          </div>
        </div>
      </div>
    </div>
  );
};
