const {defaultPlants: plants, deletePlants} = require('../data');

const removePlantById = (id) => {
  const newPlants = plants.filter((plant) => plant.id !== Number(id));
  deletePlants(newPlants);
  return newPlants;
};


module.exports = {
  removePlantById
}