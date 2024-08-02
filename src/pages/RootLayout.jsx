import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RootLayout() {
  return (
    <div className="content">
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
