import React from "react";

const Carousel: React.FC = () => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="../src/assets/images/image/image2.jpg"
            className="d-block w-100"
            alt="Slide 1"
            style={{ height: "90vh", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="../src/assets/images/image/image1.jpg"
            className="d-block w-100"
            alt="Slide 2"
            style={{ height: "90vh", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="../src/assets/images/image/image3.jpg"
            className="d-block w-100"
            alt="Slide 3"
            style={{ height: "90vh", objectFit: "cover" }}
          />

        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
