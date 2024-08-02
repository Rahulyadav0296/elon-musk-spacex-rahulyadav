import React, { useState } from "react";
import { launchFacility } from "../../../utils/launchFacility";
import CapCondition from "./CapCondition";
import CapDetails from "./CapDetails";
import "./LaunchFacility.css";

function LaunchFacility() {
  const [showMore, setShowMore] = useState(false);

  const visibleLaunches = showMore
    ? launchFacility
    : launchFacility.slice(0, 2);

  return (
    <div className="cape-facility">
      <h4 className="cape-facility-heading">Launch Facility</h4>
      {visibleLaunches.map((launch, index) => (
        <div
          className="cape-facility-card"
          key={launch.id}
          style={{
            backgroundImage: `url(${launch.image})`,
            "--delay": index,
          }}
        >
          <CapDetails launch={launch} />
          <CapCondition launch={launch} />
        </div>
      ))}
      {launchFacility.length > 2 && (
        <button
          className={`show-more-button ${showMore ? "show-less" : ""}`}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? (
            <span>
              <i className="fa-solid fa-angle-up"></i> less
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-angle-down"></i> more
            </span>
          )}
        </button>
      )}
    </div>
  );
}

export default LaunchFacility;
