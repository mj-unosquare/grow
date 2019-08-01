import axios from "axios";

const retrieveRecordByDate = (plant, tracker, date) => {
  return axios.get(
    process.env.API_URL + "/records/" + plant + "/" + tracker + "/" + date
  );
};

const createRecord = record => {
  return axios.post(process.env.API_URL + "/records", record);
};

const updateRecord = record => {
  return axios.put(process.env.API_URL + "/records", record);
};

export { retrieveRecordByDate, createRecord, updateRecord };
