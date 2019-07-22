import React from "react";
import styled from "styled-components";
import { HomeLayout } from "./styled";

const Home = () => {
  return (
    <HomeLayout>
      <img src={require("../../img/icon.png")} alt="plant-logo"></img>
      <h1 align="center">grow.</h1>
      <button>enter the garden</button>
    </HomeLayout>
  );
};

export default Home;
