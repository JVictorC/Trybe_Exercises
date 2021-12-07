const VerificationRegister = require('../../../middleWares/verificationLogin.middleware');

const RegisterMiddleWare = require('../../../middleWares/register.middleware');

const app = require('express');
const registerRouter = app.Router();

registerRouter
  .route('/')
  .post(VerificationRegister, RegisterMiddleWare)

module.exports = registerRouter;