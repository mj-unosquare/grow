const mockdata = [
  {
    id: 1,
    user_id: 1,
    name: "Kitchen",
    description:
      "South-facing room with lots of natural sunlight from 2 medium sized windows."
  },
  {
    id: 2,
    user_id: 1,
    name: "Living room",
    description:
      "North-facing room with natural sunlight from a large window in center of room - high cat traffic area 🐈"
  },
  {
    id: 3,
    user_id: 1,
    name: "Bedroom",
    description:
      "South-facing room with lots of natural sunlight from a large window, very little surfaces to place plants on."
  }
];

export const retrieveLocations = () => {
  return mockdata;
};
