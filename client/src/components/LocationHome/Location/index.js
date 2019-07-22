import React from "react";
import styled from "styled-components";
import { LocationLayout } from "./styled";

const Location = props => {
  const { id, name, description, imageurl } = props;
  return (
    <LocationLayout to={`/locations/${id}`}>
      <img src={!imageurl.length ? require("Images/stock.jpeg") : imageurl} />
      <h1> {name} </h1>
      <p> {description} </p>
    </LocationLayout>
  );
};

export default Location;
