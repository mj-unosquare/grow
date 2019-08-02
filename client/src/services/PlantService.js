import { API } from "Constants";
import { Instance } from "Utilities";

const retrievePlantsByLocationId = id => {
  return Instance.get(API.GET_PLANT_BY_LOCATION_ID.replace(":id", id));
};

const retrievePlantById = id => {
  return Instance.get(API.GET_PLANT_BY_ID.replace(":id", id));
};

export { retrievePlantsByLocationId, retrievePlantById };
