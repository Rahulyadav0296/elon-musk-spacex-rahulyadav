import React from "react";
import { Link } from "react-router-dom";

function ActiveLink({ launch, item, link }) {
  return (
    <div className="tooltip-container">
      <Link
        target="_blank"
        to={link ? link : "#"}
        className={
          link ? "icon-link icon-link-active" : "icon-link icon-link-nonactive"
        }
      >
        <i className={`fa-brands fa-${item}`}></i>
      </Link>
      <span className="tooltip-text">
        {link ? `${item} Link` : `${item} Link is not active`}
      </span>
    </div>
  );
}

export default ActiveLink;
