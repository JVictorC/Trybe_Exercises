const rescue = require("express-rescue");
const { getDataByCep, createCep } = require("../services/CepServices");

const getByCep = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const response = await getDataByCep(cep);
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return next(error);
  }

}

const createNewCep = async (req, res, next) => {
  try {
    const response = await createCep(req.body);

    return res.status(200).json({
      status: 'Success',
      ...req.body
    });


  } catch (error) {
    console.log(error);
    return next(error);
  }
}


module.exports = {
  getByCep,
  createNewCep
}