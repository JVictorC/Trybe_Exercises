const express = require("express");
const { getByCep, createNewCep } = require("../../controllers/CepController");
const cepRouter = express.Router();

cepRouter
  .route('/:cep')
  .get(getByCep)

cepRouter
  .route('/')
  .post(createNewCep)

module.exports = cepRouter;
