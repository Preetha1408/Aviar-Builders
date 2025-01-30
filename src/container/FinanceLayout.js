import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavbar from "../components/Core/HeaderNavbar"; // The navbar for Aviar


const AviarLayout = () => {
  return (
    <div>
      {/* Header or Navbar specific to Aviar */}
      <HeaderNavbar />

      {/* Main content of the Aviar pages will be rendered here */}
      <main style={{ minHeight: "calc(100vh - 123px)" }}>
        <Outlet /> {/* This will render the nested Aviar routes */}
      </main>

    </div>
  );
};

export default AviarLayout;
