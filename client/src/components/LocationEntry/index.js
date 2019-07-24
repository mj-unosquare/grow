import React from "react";
import styled from "styled-components";
import container from "./container";
import { LocationEntryLayout } from "./styled";
import Plant from "Components/Plant";

const LocationEntry = props => {
  const stockImg =
    "https://images.pexels.com/photos/1122765/pexels-photo-1122765.jpeg";
  const { id, name, description, imageurl } = props.location;
  const plants = props.plants;
  console.log(stockImg);
  return (
    <LocationEntryLayout>
      <img src={stockImg} />
      <h1> {name} </h1>
      <p> {description} </p>
      <div className="plantList">
        {!plants.length ? (
          <h1>no plants found</h1>
        ) : (
          plants.map(plant => {
            return (
              <Plant
                id={plant.id}
                name={plant.name}
                description={plant.description}
                imageurl={plant.imageurl}
                key={plant.id}
              />
            );
          })
        )}
      </div>
    </LocationEntryLayout>
  );
};

export default container(LocationEntry);
