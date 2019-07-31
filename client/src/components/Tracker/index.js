import React from "react";
import container from "./container";
import { Layout } from "./styled";

export const Tracker = ({ tracker }) => {
  let input = <input type="text" />;
  if (tracker.tracker_type === "number") {
    input = <input type="number" name="quantity" min="1" max="1000" />;
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
    </Layout>
  );
};

export default container(Tracker);
