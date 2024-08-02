import React, { useState } from "react";
import "./PhotoDetails.css";
function PhotoDetails({ photosDetails, selectedItem }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedItem.flickr_images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === selectedItem.flickr_images.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <>
      {photosDetails && (
        <div className="photos-content">
          <button className="photo-nav-button" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <div className="photo-slider">
            {selectedItem.flickr_images.map((image, index) => (
              <div
                key={index}
                className={`photo-slide ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button className="photo-nav-button" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      )}
    </>
  );
}

export default PhotoDetails;
