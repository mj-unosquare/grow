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
        locations.map(location => {
          return (
            <Location
              id={location.location_id}
              name={location.location_name}
              description={location.description}
              imageurl={location.imageurl}
              key={location.location_id}
            />
          );
        })
      )}
    </LocationHomeLayout>
  );
};

export default container(LocationHome);
