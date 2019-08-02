import axios from "axios";
import { API } from "Constants";

const retrieveLocations = () => {
  return axios.get(API.GET_LOCATIONS);
};

const retrieveLocationById = id => {
  return axios.get(API.GET_LOCATION_BY_ID.replace(":id", id));
};

export { retrieveLocations, retrieveLocationById };
