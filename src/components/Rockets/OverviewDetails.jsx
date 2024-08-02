import React from "react";
import "./OverviewDetails.css";
function OverviewDetails({ selectedItem, overviewDetails }) {
  return (
    <>
      {overviewDetails && (
        <div className="overview-content">
          <img
            src={selectedItem.flickr_images[0]}
            alt={selectedItem.rocket_name}
            className="overview-image"
          />
          <div className="overview-description">
            <p className="overview-description-p">Description</p>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default OverviewDetails;
