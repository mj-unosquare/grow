import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Routes } from "Constants";
import { GlobalStyle, Theme } from "./styled";
import { Home, LocationHome, Header } from "Components";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router>
          <Home path={Routes.HOME} />
          <LocationHome path={Routes.LOCATION_HOME} />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
