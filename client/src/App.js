import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Routes } from "Constants";
import { GlobalStyle, Theme } from "./styled";
import {
  Header,
  Home,
  LocationEntry,
  LocationHome,
  PlantEntry
} from "Components";
import TrackerHome from "./components/TrackerHome";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Fragment>
          <Header />
          <Router>
            <Home path={Routes.HOME} />
            <LocationHome path={Routes.LOCATION_HOME} />
            <LocationEntry path={Routes.LOCATION_ENTRY} />
            <PlantEntry path={Routes.PLANT_ENTRY} />
            <TrackerHome path={Routes.TRACKER_HOME} />
          </Router>
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
