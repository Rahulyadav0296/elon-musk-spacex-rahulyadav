import React from "react";
import "./Paragraph.css";

function Paragraph({ label, value }) {
  return (
    <div className="paragraph">
      <p className="label">{label}</p>
      <span className="value">{value}</span>
    </div>
  );
}

export default Paragraph;
