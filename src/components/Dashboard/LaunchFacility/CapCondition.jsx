import React from "react";

function CapCondition({ launch }) {
  return (
    <div className="cape-conditions">
      <div className="cape-temp">
        <h4 className="cape-temp-title">Temp</h4>
        <p className="cape-temp-value">{launch.temp}&#176;C</p>
      </div>
      <div className="cape-weather">
        <h4 className="cape-weather-title">Weather</h4>
        <p className="cape-weather-value">{launch.weather}</p>
      </div>
      <div className="cape-wind">
        <h4 className="cape-wind-title">Wind</h4>
        <p className="cape-wind-value">{launch.wind} m/s</p>
      </div>
    </div>
  );
}

export default CapCondition;
