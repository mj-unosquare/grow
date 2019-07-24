import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import Header from "Components/Header";
import Home from "Components/Home";
import LocationEntry from "Components/LocationEntry";
import LocationHome from "Components/LocationHome";
import routes from "Constants/routes";
import { GlobalStyle } from "./styled";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path={routes.HOME} />
        <LocationHome path={routes.LOCATION_HOME} />
        <LocationEntry path={routes.LOCATION_ENTRY} />
      </Router>
    </Fragment>
  );
};

export default App;
