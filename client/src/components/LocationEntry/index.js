import React from "react";
import styled from "styled-components";
import container from "./container";
import { LocationEntryLayout } from "./styled";

const LocationEntry = props => {
  const stockImg =
    "https://images.pexels.com/photos/1122765/pexels-photo-1122765.jpeg";
  const { id, name, description, imageurl } = props.location;
  console.log(stockImg);
  return (
    <LocationEntryLayout>
      <img src={stockImg} />
      <h1> {name} </h1>
      <p> {description} </p>
    </LocationEntryLayout>
  );
};

export default container(LocationEntry);
