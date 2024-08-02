import React from "react";

function RocketDetails({ launch }) {
  return (
    <div className="rocket-info">
      <p className="label">ROCKET LOGO</p>
      <img
        src={
          launch.links.mission_patch
            ? launch.links.mission_patch
            : "/download.png"
        }
        alt="Rocket Logo"
        className="rocket-logo"
      />
      <p className="label">LAUNCHPAD</p>
      <span className="value">{launch.launch_site.site_name}</span>
    </div>
  );
}

export default RocketDetails;
