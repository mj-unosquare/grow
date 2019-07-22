import React from "react";
import { Router } from "@reach/router";
import Home from "Components/Home";
import LocationHome from "Components/LocationHome";
import routes from "Constants/routes";

const mockData = "";

const App = () => {
  return (
    <Router>
      <Home path={routes.HOME} />
      <LocationHome path={routes.LOCATION_HOME} />
    </Router>
  );
};

export default App;
