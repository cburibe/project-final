import React from "react";

// import { MdFavorite } from "react-icons/md";
import "/workspace/project-final/src/front/styles/newfeed.css";

const Post = (props) => {
  const Propspost = {
    linkimagepost: "https://picsum.photos/seed/picsum/1600/1000",
    user1: props.user1,
    caption: props.caption,
  };

  return (
    <div className="post mb-3 mx-auto" style={{ maxWidth: 940 }}>
      <div className="row g-0 ">
        <div className="col-md-8">
          <img
            src={Propspost.linkimagepost}
            className="img-fluid "
            alt="..."
          />
          {/* <p className="text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
        </div>
        <div className="col-md-4 pt-5">
          <div className="body ms-3 " >
            {/* <MdFavorite /> */}
            {/* <span className="likes fw-bold">10 likes</span> */}
            <table className="coment table">
              <tbody>
                <tr>
                  <th scope="row">{Propspost.user1}</th>
                  <td>
                    {/* Se ven super bien con su familia. Sigan disfrutando de sus
                    vacaciones. */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
