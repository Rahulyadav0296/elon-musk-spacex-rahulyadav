import React from "react";
import "./Dashboard.css";
import LaunchFacility from "./LaunchFacility/LaunchFacility";
import PreviousLaunch from "./PreviousLaunch/PreviousLaunch";
import StarLink from "./StarLink/StarLink";
import Upcoming from "./UpcomingLaunch/Upcoming";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-section">
        <div className="dashboard-item">
          <Upcoming />
        </div>
        <div className="dashboard-item">
          <PreviousLaunch />
        </div>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-item">
          <LaunchFacility />
        </div>
        <div className="dashboard-item">
          <StarLink />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
