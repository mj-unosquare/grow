import React from "react";
import ReactDOM from "react-dom";
import { Theme } from "./theme";
import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: #443730;
`;

const Logo = styled.img`
  width: 150px;
`;

const Body = createGlobalStyle`
  body {
    background-color: ${Theme.color.lightgreen};
  }
`;

const App = () => {
  return (
    <div>
      <Body />
      <Logo src={require("./img/icon.png")} alt="plant-logo"></Logo>
      <Title>grow.</Title>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
