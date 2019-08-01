import React from "react";
import { Link } from "@reach/router";
import DayPicker from "react-day-picker";
import container from "./container";
import { TrackerHomeLayout } from "./styled";

export const TrackerHome = ({
  trackers,
  plantid,
  selectedDay,
  selectDay,
  formatDate
}) => {
  return (
    <TrackerHomeLayout>
      <DayPicker onDayClick={selectDay} selectedDays={selectedDay} />
      {!trackers.length ? (
        <h1>no trackers found</h1>
      ) : (
        trackers.map(tracker => {
          return (
            <Link
              to={`/plants/${plantid}/tracker/${tracker.tracker_id}/${
                selectedDay ? formatDate(selectedDay) : formatDate(new Date())
              }`}
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
