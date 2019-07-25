import React from "react";
import { LocationLayout } from "./styled";

const Location = props => {
  const { id, name, description, imageurl } = props;
  return (
    <LocationLayout>
      <img src={!imageurl.length ? require("Images/stock.jpeg") : imageurl} />
      <h1> {name} </h1>
      <p> {description} </p>
    </LocationLayout>
  );
};

export default Location;
