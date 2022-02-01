const {defaultPlants: plants} = require('../data');

const getPlants = () => {
  return plants;
};

const getPlantsById = (id) => {
  if (!id) {
    throw { status: 400, message: 'id é obrigatorio' }
  }
  return plants.filter((plant) => plant.id === Number(id));
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem("plants", JSON.stringify(filteredPlants));
  return filteredPlants;
};

module.exports = {
  getPlants,
  getPlantsById,
}

