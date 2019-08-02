import { Instance } from "Utilities";
import { API } from "Constants";

const retrieveLocations = () => {
  return Instance.get(API.GET_LOCATIONS);
};

const retrieveLocationById = id => {
  return Instance.get(API.GET_LOCATION_BY_ID.replace(":id", id));
};

export { retrieveLocations, retrieveLocationById };
