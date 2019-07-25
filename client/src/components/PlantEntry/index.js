import React from "react";
import { Link } from "@reach/router";
import container from "./container";
import { PlantEntryLayout } from "./styled";
import routes from "Constants/routes";

const PlantEntry = props => {
  const stockImg =
    "https://images.pexels.com/photos/1122765/pexels-photo-1122765.jpeg";
  const { id, name, description, imageurl } = props.plant;
  const plants = props.plants;
  return (
    <PlantEntryLayout>
      <img src={imageurl} />
      <h1> {name} </h1>
      <p> {description} </p>
      <div className="buttons">
        <Link to={routes.LOCATION_HOME}>
          <span>
            <i className="fas fa-clipboard-list"></i>
            track
          </span>
        </Link>
        <Link to={routes.LOCATION_HOME}>
          <span>
            <i className="fas fa-chart-area"></i>stats
          </span>
        </Link>
      </div>
    </PlantEntryLayout>
  );
};

export default container(PlantEntry);
