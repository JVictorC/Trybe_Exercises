const express = require('express');
const app = express();
const port = 3012;
const bodyParser = require('body-parser');
const RegisterMiddleWare = require('./middleWares/login.middleware');
const VerificationRegister = require('./middleWares/verificationLogin.middleware');

app.use(bodyParser.json())

app.listen(port, () => console.log(`Estou rodando na porta ${port}`))

app
  .route('/user/register')
  .post(VerificationRegister, RegisterMiddleWare)