import axios from "axios";
import { API } from "Constants";

const retrievePlantsByLocationId = id => {
  return axios.get(API.GET_PLANT_BY_LOCATION_ID.replace(":id", id));
};

const retrievePlantById = id => {
  return axios.get(API.GET_PLANT_BY_ID.replace(":id", id));
};

export { retrievePlantsByLocationId, retrievePlantById };
