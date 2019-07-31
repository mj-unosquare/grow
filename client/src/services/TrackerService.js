import axios from "axios";

const retrieveTrackers = () => {
  return axios.get(process.env.API_URL + "/trackers/");
};

const retrieveTrackerById = tracker_id => {
  return axios.get(process.env.API_URL + "/trackers/" + tracker_id);
};
export { retrieveTrackers, retrieveTrackerById };
