import React from "react";
import { Link } from "@reach/router";
import { HomeLayout } from "./styled";
import { routes } from "Constants";

const Home = () => {
  return (
    <HomeLayout>
      <img src={require("../../img/icon.png")} alt="plant-logo"></img>
      <h1 align="center">grow.</h1>
      <Link to={routes.LOCATION_HOME}>enter the garden</Link>
    </HomeLayout>
  );
};

export default Home;
