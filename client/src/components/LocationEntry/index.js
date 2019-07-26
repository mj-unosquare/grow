import React from "react";
import styled from "styled-components";
import container from "./container";
import { LocationEntryLayout } from "./styled";
import Plant from "Components/Plant";

const LocationEntry = props => {
  const { location_id, location_name, description, imageurl } = props.location;
  const plants = props.plants;
  return (
    <LocationEntryLayout>
      <img src={imageurl} />
      <h1> {location_name} </h1>
      <p> {description} </p>
      <div className="plantList">
        {!plants.length ? (
          <h1>no plants found</h1>
        ) : (
          plants.map(plant => {
            return (
              <Plant
                id={plant.plant_id}
                name={plant.plant_name}
                description={plant.description}
                imageurl={plant.imageurl}
                key={plant.plant_id}
              />
            );
          })
        )}
      </div>
    </LocationEntryLayout>
  );
};

export default container(LocationEntry);
