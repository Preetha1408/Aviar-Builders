import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import buildersRoutes from "./buildersRoutes";

export default function Builders() {
  return (
    <BrowserRouter>
      <Routes>
        {buildersRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
