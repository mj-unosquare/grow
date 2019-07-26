import axios from "axios";

const retrieveLocations = () => {
  return axios.get(process.env.API_URL + "/locations/account/1");
};

const retrieveLocationById = id => {
  return axios.get(process.env.API_URL + "/locations/" + id);
};

export { retrieveLocations, retrieveLocationById };
