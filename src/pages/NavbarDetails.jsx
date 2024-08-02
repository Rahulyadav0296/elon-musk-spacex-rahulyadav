import React from "react";
import { NavLink } from "react-router-dom";

function NavbarDetails({ isSidebarOpen, toggleSidebar }) {
  return (
    <>
      <div className="navbar-logo">
        <img
          className="navbar-img"
          src="/animated-logo.svg"
          alt="spacex-live-logo"
        />
      </div>
      <div className={`navbar-item ${isSidebarOpen ? "open" : ""}`}>
        <ul className="navbar-item-unorder">
          <li className="navbar-item-list">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "#404040",
                fontWeight: isActive ? "bold" : "",
              })}
              className="nav-link"
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="navbar-item-list">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "#404040",
                fontWeight: isActive ? "bold" : "",
              })}
              className="nav-link"
              to="/rocket"
            >
              Rockets
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="menu-btn" onClick={toggleSidebar}>
        <i className={`fa-solid ${isSidebarOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>
    </>
  );
}

export default NavbarDetails;
