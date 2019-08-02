import React from "react";
import { Link } from "@reach/router";
import { HomeLayout } from "./styled";
import { Routes } from "Constants";

const Home = () => {
  return (
    <HomeLayout>
      <img src={require("../../img/icon.png")} alt="plant-logo"></img>
      <h1 align="center">grow.</h1>
      <Link to={Routes.LOCATION_HOME}>enter the garden</Link>
      <a
        title="grow is a place where you can track your plants"
        className="hyperlink"
      >
        what is grow?
      </a>
    </HomeLayout>
  );
};

export default Home;
