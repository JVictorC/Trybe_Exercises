const PlantsServices = require('../Services/getPlants');

const getPlants = (req, res, next) => {
  try {
    const plants = PlantsServices.getPlants();
    return res.status(200).json(plants);
  } catch (error) {
    next(error)
  }
}

const getPlantsById = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  console.log(typeof id);
  try {
    const plant = PlantsServices.getPlantsById(id);
    return res.status(200).json(plant);
  } catch (error) {
    console.log(error.message);
    next(error)
  }
}


module.exports = {
  getPlants,
  getPlantsById,
}