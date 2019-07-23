import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import { GlobalStyle } from "./styled";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <img src={require("./img/icon.png")} alt="plant-logo"></img>
      <h1>grow.</h1>
    </Fragment>
  );
};

export default App;
