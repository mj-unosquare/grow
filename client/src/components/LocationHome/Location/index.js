import React from "react";
import { Link } from "@reach/router";
import { LocationLayout } from "./styled";
import { Routes } from "Constants";

const Location = props => {
  const { id, name, description, imageurl } = props;
  return (
    <LocationLayout>
      <img src={!imageurl.length ? require("Images/stock.jpeg") : imageurl} />
      <h1> {name} </h1>
      <p> {description} </p>
      <Link to={Routes.LOCATION_ENTRY.replace(":id", id)}>grow here</Link>
    </LocationLayout>
  );
};

export default Location;
