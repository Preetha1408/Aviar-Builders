import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BuilderNavBar from "../builders/components/core/Header";
import SiteMap from "../builders/components/core/SiteMap";

const BuildersLayout = () => {
  const location = useLocation();  // Get the current route

  // Define the paths where you don't want to show the navbar
  const hideNavbarPaths = ["/home"];

  console.log("builders :", location.pathname);  // Debugging

  return (
    <div className="app">
      <div className="app-body" style={{ minHeight: "calc(100vh - 123px)" }}>
        {/* Conditionally render the header navbar based on the route */}
        {!hideNavbarPaths.includes(location.pathname) && <BuilderNavBar />}
        <div className="mt-4">
          <div className="site-maincontent pt-5">
            <Outlet /> {/* This will render the nested routes */}
            <SiteMap/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildersLayout;
