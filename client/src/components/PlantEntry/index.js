import React from "react";
import { Link } from "@reach/router";
import container from "./container";
import { PlantEntryLayout } from "./styled";
import { Routes } from "Constants";

const PlantEntry = props => {
  const stockImg =
    "https://images.pexels.com/photos/1122765/pexels-photo-1122765.jpeg";
  const { plant_id, plant_name, description, imageurl } = props.plant;
  return (
    <PlantEntryLayout>
      <img src={!imageurl ? stockImg : imageurl} />
      <h1> {plant_name} </h1>
      <p> {description} </p>
      <div className="buttons">
        <Link to={Routes.LOCATION_HOME}>
          <span>
            <i className="fas fa-clipboard-list"></i>
            track
          </span>
        </Link>
        <Link to={Routes.LOCATION_HOME}>
          <span>
            <i className="fas fa-chart-area"></i>stats
          </span>
        </Link>
      </div>
    </PlantEntryLayout>
  );
};

export default container(PlantEntry);
