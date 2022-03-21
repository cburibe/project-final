import React from "react";
import { Hotels } from "../component/hotels";

export const RecommendedHotels = () => {
  return (
    <div>
      <h1 className="mx-4 my-3 text-center">Nuestra recomendación</h1>
      <div />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Hotels anfitrion="Casa bajo mena" />
          </div>
        </div>
      </div>
    </div>
  );
};
