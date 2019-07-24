import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { LocationLayout } from "./styled";
import routes from "Constants/routes";

const Location = props => {
  const { id, name, description, imageurl } = props;
  return (
    <LocationLayout>
      <img src={!imageurl.length ? require("Images/stock.jpeg") : imageurl} />
      <h1> {name} </h1>
      <p> {description} </p>
      <Link to={`/locations/${id}`}>grow here</Link>
    </LocationLayout>
  );
};

export default Location;
