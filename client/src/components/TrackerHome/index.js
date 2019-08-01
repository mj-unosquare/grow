import React from "react";
import { Link } from "@reach/router";
import container from "./container";
import { TrackerHomeLayout } from "./styled";

export const TrackerHome = ({ trackers, plantid }) => {
  const today = new Date();
  const todayAsString =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return (
    <TrackerHomeLayout>
      {!trackers.length ? (
        <h1>no trackers found</h1>
      ) : (
        trackers.map(tracker => {
          return (
            <Link
              to={`/plants/${plantid}/tracker/${tracker.tracker_id}/${todayAsString}`}
              key={tracker.tracker_id}
            >
              {tracker.tracker_name}
            </Link>
          );
        })
      )}
    </TrackerHomeLayout>
  );
};

export default container(TrackerHome);
