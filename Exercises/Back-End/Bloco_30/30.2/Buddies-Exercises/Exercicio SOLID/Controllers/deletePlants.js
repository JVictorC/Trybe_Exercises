const PlantsServices = require('../Services/deletePlants');

const deletePlants = (req, res, next) => {
  const { id } = req.params;
  try {
    const plants = PlantsServices.removePlantById(id);
    return res.status(200).json(plants);
  } catch (error) {
    console.log(error.message);
    next(error)
  }
}

module.exports = {
  deletePlants
}