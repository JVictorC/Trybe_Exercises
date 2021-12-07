const app = require('express');
const loginRouter = require('./login');
const registerRouter = require('./register');

const userRouter = app.Router();

userRouter
  .use('/register', registerRouter)

userRouter
  .use('/login', loginRouter)

module.exports = userRouter