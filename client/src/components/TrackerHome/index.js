import React from "react";
import { Link } from "@reach/router";
import { TrackerHomeLayout } from "./styled";

export const TrackerHome = () => {
  return (
    <TrackerHomeLayout>
      <Link to={`/plants/tracker/water/1`}>water</Link>
      <Link to={`/plants/tracker/water/1`}>sunlight</Link>
      <Link to={`/plants/tracker/water/1`}>food</Link>
    </TrackerHomeLayout>
  );
};

export default TrackerHome;
