import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routers from "./routes/routes";
import { AppContextProvider } from "./hooks/AppContext";
function App() {
  return (
    <AppContextProvider >
      <Routers />
    </AppContextProvider>
  );
}

export default App;
