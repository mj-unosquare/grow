import React from "react";
import { Link } from "@reach/router";
import container from "./container";
import { TrackerHomeLayout } from "./styled";

export const TrackerHome = ({ trackers, plantid }) => {
  return (
    <TrackerHomeLayout>
      {!trackers.length ? (
        <h1>no trackers found</h1>
      ) : (
        trackers.map(tracker => {
          return (
            <Link
              to={`/plants/${plantid}/tracker/${
                tracker.tracker_id
              }/${new Date()}`}
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
