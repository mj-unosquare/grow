import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import routes from "Constants/routes";
import { GlobalStyle } from "./styled";
import { Home, LocationHome } from "Components";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Home path={routes.HOME} />
        <LocationHome path={routes.LOCATION_HOME} />
      </Router>
    </Fragment>
  );
};

export default App;
