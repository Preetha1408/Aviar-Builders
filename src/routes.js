
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import technologyRoutes from "./technologyRoutes";
import buildersRoutes from "./builders/routes/buildersRoutes";
import AviarLayout from "./container/AviarLayout";
import BuildersLayout from "./container/BuildersLayout";

import HomePage from "./components/HomePage";
import Home from "./components/Home";
import Consulting from "./components/Consulting";
import StaffingSolutions from "./components/StaffingSolutions";
import GIS from "./components/GIS";
import Career from "./components/Career";
import Localcommunity from "./components/LocalCommunity";
import Events from "./components/Events";
import { ToastContainer } from "react-toastify";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Builders Routes */}
        {buildersRoutes.map((route, idx) => {
          return route.publiclayout ? (
            // PublicLayout wrapper for routes with publiclayout: true
            <Route key={idx} element={<BuildersLayout />}>
              <Route path={route.path} element={<route.component />} />
            </Route>
          ) : (
            // Routes without PublicLayout
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}

        {/* Technology Routes */}
        {technologyRoutes.map((route, idx) => {
          return route.publiclayout ? (
            // PublicLayout wrapper for routes with publiclayout: true
            <Route key={idx} element={<AviarLayout />}>
              <Route path={route.path} element={<route.component />} />
            </Route>
          ) : (
            // Routes without PublicLayout
            <Route key={idx} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
