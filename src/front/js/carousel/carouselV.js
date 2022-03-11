import React, { useState } from "react";
import { Sliderimg } from "./storeimg";
import "./carousel.css";

const ImageSlidere = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon " aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        {Sliderimg.map((slide, index) => {
          return (
            <div
              id="carouselExampleInterval"
              className={index === current ? "slide active" : "slide"}
              key={index}
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={5000}>
                  {index === current && (
                    <img
                      className="image"
                      src={slide.image}
                      alt="travel image"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </>
  );
};

export default ImageSlidere;
