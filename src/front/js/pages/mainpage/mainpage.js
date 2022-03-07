import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export const Mainpage = () => {
  return (
    <>
      <div className="contenedor">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="https://picsum.photos/id/666/1600/1000"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://picsum.photos/id/888/1600/1000"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/id/999/1600/1000"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container fotos mt-3">
          <div className="row">
            <div className="col-lg-4">
              <title>Placeholder</title>
              <img
                width={140}
                height={140}
                src="https://picsum.photos/id/444/1600/1000"
                className="bd-placeholder-img rounded-circle"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <h2>Foto1</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <ReactPlayer
                className="bd-placeholder-video rounded-circle"
                url="https://www.youtube.com/watch?v=ZVQeTagj0AI&ab_channel=Ecolog%C3%ADaVerde"
                playing
                muted
                loop
                width={300}
                height={140}
              />
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <h2>Video</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <img
                width={140}
                height={140}
                src="https://picsum.photos/id/239/1600/1000"
                className="bd-placeholder-img rounded-circle"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <h2>Foto2</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
