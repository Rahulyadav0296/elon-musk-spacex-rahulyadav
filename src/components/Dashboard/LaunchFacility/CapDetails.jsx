import React from "react";
import DivDetails from "./DivDetails";

function CapDetails({ launch }) {
  return (
    <div className="cape-details">
      <DivDetails
        one="cape-info"
        two="cape-info-title"
        three="cape-info-name"
        label={launch.launch_details}
        value={launch.launch_name}
      />
      <DivDetails
        one="cape-region"
        two="cape-region-title"
        three="cape-region-name"
        label="Region"
        value={launch.region}
      />
    </div>
  );
}

export default CapDetails;
