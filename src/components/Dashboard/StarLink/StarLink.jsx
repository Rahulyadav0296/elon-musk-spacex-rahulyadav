import React from "react";
import "./StarLink.css";

function StarLink() {
  return (
    <div className="starlink-container">
      <h4 className="starlink-title">Starlink</h4>
      <img
        className="starlink-image"
        src="https://i.giphy.com/8Am0UlfiwZcgEDOy4h.webp"
        alt="The Active Satellite"
      />
      <p className="starlink-description">
        There are currently 3268 active StarLink satellites on the low Earth
        orbit.
      </p>
    </div>
  );
}

export default StarLink;
