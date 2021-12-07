const app = require('express');
const loginMiddleWare = require('../../../middleWares/login.middlaware');
const Loginvalidation = require('../../../middleWares/loginValidation.middlaware');
const loginRouter = app.Router();

loginRouter
  .route('/')
  .post(
    Loginvalidation,
    loginMiddleWare
  );

module.exports = loginRouter