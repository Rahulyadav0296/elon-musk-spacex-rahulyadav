import React from "react";

function DivDetails(props) {
  return (
    <div className={props.one}>
      <h4 className={props.two}>{props.label}</h4>
      <p className={props.three}>{props.value}</p>
    </div>
  );
}

export default DivDetails;
