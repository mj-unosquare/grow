import React from "react";
import styled from "styled-components";
import { LocationLayout } from "./styled";

const Location = props => {
  const { id, name, description } = props;
  return (
    <LocationLayout to={`/locations/${id}`}>
      <h1> {name} </h1>
      <p> {description} </p>
    </LocationLayout>
  );
};

export default Location;
