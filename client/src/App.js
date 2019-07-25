import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { routes } from "Constants";
import { GlobalStyle, Theme } from "./styled";
import { Home, LocationHome } from "Components";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router>
          <Home path={routes.HOME} />
          <LocationHome path={routes.LOCATION_HOME} />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
