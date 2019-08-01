import React from "react";
import container from "./container";
import { Layout } from "./styled";

export const Tracker = ({ tracker, record, onChange, save }) => {
  let input = (
    <input
      name="record_value"
      type="text"
      defaultValue={record.record_value}
      onChange={onChange}
    />
  );
  if (tracker.tracker_type === "number") {
    input = (
      <input
        name="record_value"
        type="number"
        name="quantity"
        min="1"
        max="1000"
        defaultValue={record.record_value}
        onChange={onChange}
      />
    );
  }

  return (
    <Layout>
      <img src={tracker.imageurl} alt="logo"></img>
      <h1>{tracker.tracker_name}</h1>
      <p>{tracker.description}</p>
      <form>
        {input}
        {tracker.measurement}
      </form>
      <button type="submit" onClick={save}>
        write this down
      </button>
    </Layout>
  );
};

export default container(Tracker);
