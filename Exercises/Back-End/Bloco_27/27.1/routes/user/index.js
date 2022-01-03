var express = require('express');
const validationFieldsPostUser = require('../../middlewares/validationFieldsPostUser');
const validationPassword = require('../../middlewares/middleware');
const { insertNewUser, findAll, findById, updateUser } = require('../../models/Users');
var userRouter = express.Router();

userRouter
  .route('/')
  .get(async (req, res) => {
    const request = await findAll();
    return res.status(200).json(request)
  })

userRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const request = await findById(id);
    if (request.length < 1) {
      console.log('a');
      return res.status(404).json({
        "error": true,
        "message": "Usuário não encontrado"
      })
    }
    return res.status(200).json(request)
  })

userRouter
  .route('/')
  .post(validationFieldsPostUser, validationPassword, async (req, res) => {
    const request = await insertNewUser(req.body);
    return res.status(201).json(request);
  });

userRouter
  .route('/:id')
  .put(validationFieldsPostUser, validationPassword, async (req, res) => {
    const {id} = req.params;
    const request = await updateUser(id, req.body);
    return res.status(200).json(request);
    return;
  })


module.exports = userRouter;