const mockdata = [
  {
    id: 1,
    location_id: 1,
    name: "Aloe Vera",
    description: "plant description",
    imageurl: ""
  },
  {
    id: 2,
    location_id: 1,
    name: "Spider plant",
    description: "eaten by cats 🐈",
    imageurl: ""
  },
  {
    id: 3,
    location_id: 1,
    name: "Echevaria",
    description: "another plant description",
    imageurl: ""
  },
  {
    id: 4,
    location_id: 1,
    name: "Succulent",
    description: "another plant description",
    imageurl: ""
  },
  {
    id: 5,
    location_id: 1,
    name: "Orchid",
    description: "another plant description",
    imageurl: ""
  }
];

const retrievePlantsByLocationId = id => {
  return mockdata;
};

const retrievePlantById = id => {
  return mockdata[id];
};

export { retrievePlantsByLocationId, retrievePlantById };
