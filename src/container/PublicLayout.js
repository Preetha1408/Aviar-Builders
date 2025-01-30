import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderNavbar from "../components/Core/HeaderNavbar";
import BuilderNavBar from "../builders/components/core/Header";

const PublicLayout = () => {
  const location = useLocation();  // Get the current route

  // Define the paths where you don't want to show the navbar
  const hideNavbarPaths = ["/home"];

  return (
    <div className="app">
      <div className="app-body" style={{ minHeight: "calc(100vh - 123px)" }}>
        {/* Conditionally render the header navbar based on the route */}
        {!hideNavbarPaths.includes(location.pathname) && <HeaderNavbar />}
        <div className="mt-4">
          <div className="site-maincontent pt-5">
            <Outlet /> {/* This will render the nested routes */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicLayout;
