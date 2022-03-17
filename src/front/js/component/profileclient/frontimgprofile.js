import React from "react";
import "../../../styles/profileclient/frontimgprofile.css";
export const Imgprofile = (props) => {
  return (
    <>
      <div className="img-profile frontimg">
        <img
          src={props.linkImageFrony}
          className="img-fluid rounded-circle"
          alt="..."
        />
      </div>
    </>
  );
};

export default Imgprofile;
