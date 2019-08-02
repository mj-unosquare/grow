import React from "react";
import container from "./container";
import { LocationHomeLayout } from "./styled";
import Location from "./Location";

export const LocationHome = ({ locations }) => {
  return (
    <LocationHomeLayout>
      {!locations.length ? (
        <h1>no locations found</h1>
      ) : (
        locations.map(
          ({ location_id, location_name, description, imageurl }) => {
            return (
              <Location
                id={location_id}
                name={location_name}
                description={description}
                imageurl={imageurl}
                key={location_id}
              />
            );
          }
        )
      )}
    </LocationHomeLayout>
  );
};

export default container(LocationHome);
