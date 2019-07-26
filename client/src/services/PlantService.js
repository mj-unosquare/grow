import axios from "axios";

const retrievePlantsByLocationId = id => {
  return axios.get(process.env.API_URL + "/plants/location/" + id);
};

const retrievePlantById = id => {
  return axios.get(process.env.API_URL + "/plants/" + id);
};

export { retrievePlantsByLocationId, retrievePlantById };
