import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { PlantLayout } from "./styled";

const Plant = props => {
  const { id, name, description, imageurl } = props;
  const stockImg =
    "https://images.pexels.com/photos/1122765/pexels-photo-1122765.jpeg";
  return (
    <PlantLayout>
      <img src={!imageurl.length ? stockImg : imageurl} />
      <div className="overlay">
        <h1> {name} </h1>
        <p> {description} </p>
        <Link to={`/plants/${id}`}>grow</Link>
      </div>
    </PlantLayout>
  );
};

export default Plant;
