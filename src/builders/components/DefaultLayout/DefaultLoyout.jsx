import React from "react";
import Header from "../core/Header";
import SiteMap from "../core/SiteMap";
import { Outlet } from "react-router-dom";


function DefaultLoyout() {
  return (
    <>
      <Header />
      <Outlet/>
      <SiteMap />
    </>
  );
}

export default DefaultLoyout;
