import React from "react";
import { NewPublication } from "../../component/create_publication/publication";
export const Publication_uploader = (props) => {
  return (
    <div className="container-fluid  ">
      <div className="row ">
        <div className="col-md-12">
          <NewPublication />
        </div>
      </div>
    </div>
  );
};
