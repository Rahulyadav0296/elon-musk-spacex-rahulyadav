import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import NavbarDetails from "./NavbarDetails";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={`navbar ${isSidebarOpen ? "active" : ""}`}>
        <NavbarDetails
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <button
          className={`menu-btn-cross ${!isSidebarOpen ? "hide" : ""}`}
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="sidebar-logo">
          <img
            className="sidebar-img"
            src="/animated-logo.svg"
            alt="spacex-live-logo"
          />
        </div>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleSidebar}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/rocket" onClick={toggleSidebar}>
              Rockets
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
