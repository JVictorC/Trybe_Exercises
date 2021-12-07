const app = require('express');
const postsMiddleWare = require('../../middleWares/posts.middleware');
const postsVerification = require('../../middleWares/postsVerification');
const postsRouter = app.Router();

postsRouter
  .route('/:id')
  .post(postsVerification, postsMiddleWare)

module.exports = postsRouter