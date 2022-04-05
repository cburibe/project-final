import React from "react";
import "../../../styles/profileclient/cartaimg.css";

export const Cardimg = (props) => {
  const Propscardimg = {
    linkImageFrony: "https://picsum.photos/1600/1000?grayscale",
    imagepost: props.imagepost,
    user1: props.user1,
    caption: props.caption,
  };
  return (
    <div className="card Cardimg_card">
      <div className="cardimg_div_header">
        <i>
          <h5 className="Cardimg_h5  float-end pe-3 pt-2">
            <b>{Propscardimg.user1}</b>
          </h5>
        </i>

      </div>
      <div className="Cardimg_divimg">
        <img
          src={Propscardimg.imagepost}
          className="card-img-top Cardimg_img "
          alt={Propscardimg.caption}
        />
      </div>

      <div className="Cardimg_description p-1 py-3">
        <p className="fs-5">
          <b className="ps-3">{Propscardimg.user1}</b> {Propscardimg.caption}
        </p>
      </div>
    </div>
  );
};

export default Cardimg;
