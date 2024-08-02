import React from "react";
import "./ModalHeader.css";
function ModalHeader({
  selectedItem,
  setOverviewDetails,
  setPhotoDetails,
  handleClose,
  photosDetails,
  overviewDetails,
}) {
  const handleOverview = () => {
    setOverviewDetails(true);
    setPhotoDetails(false);
  };

  const handlePhotos = () => {
    setOverviewDetails(false);
    setPhotoDetails(true);
  };
  return (
    <div className="modal-header">
      <div className="modal-header-left">
        <h2 className="modal-title">{selectedItem.rocket_name}</h2>
        <button
          onClick={handleOverview}
          className={overviewDetails ? "active" : "inactive"}
        >
          Overview
        </button>
        <button
          onClick={handlePhotos}
          className={`${
            photosDetails ? "active additional-class" : "inactive"
          } hide-on-mobile`}
        >
          Photos
        </button>
      </div>
      <button onClick={handleClose} className="modal-close-button">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default ModalHeader;
