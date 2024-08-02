import React from "react";

function RocketDetails({ rocket, onClick }) {
  return (
    <div key={rocket.id}>
      <div className="rocket-card">
        <div
          className={`${
            rocket.active === false ? "rocket-status" : "rocket-status-active"
          }`}
        >
          <p className="rocket-status-label">STATUS</p>
          <span className="rocket-status-value">
            {rocket.active === false ? "In development" : "Active"}
          </span>
        </div>
        <h3 className="rocket-name">{rocket.rocket_name}</h3>
        <img
          onClick={onClick}
          className="rocket-image"
          src={rocket.flickr_images[0]}
          alt={rocket.rocket_name}
        />
      </div>
    </div>
  );
}

export default RocketDetails;
