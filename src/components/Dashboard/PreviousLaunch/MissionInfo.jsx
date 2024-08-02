import React from "react";

function MissionInfo({ launch }) {
  return (
    <div className="rocket-info">
      <p className="label">MISSION PATCH</p>
      <img
        src={
          launch.links.mission_patch
            ? launch.links.mission_patch
            : "/download.png"
        }
        alt="MISSION_PATCH"
        className="rocket-logo"
      />
      <p className="label">CREW</p>
      <span className="value">{launch.crew}</span>
    </div>
  );
}

export default MissionInfo;
