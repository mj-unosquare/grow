export default {
  GET_LOCATIONS: process.env.API_URL + "/locations/account/1",
  GET_LOCATION_BY_ID: process.env.API_URL + "/locations/:id",
  GET_PLANT_BY_LOCATION_ID: process.env.API_URL + "/plants/location/:id",
  GET_PLANT_BY_ID: process.env.API_URL + "/plants/:id"
};
