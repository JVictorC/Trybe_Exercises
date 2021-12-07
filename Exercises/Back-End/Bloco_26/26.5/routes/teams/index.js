const express = require('express');
const teamsMiddleWare = require('../../middleWares/teams.middleware');
const teamsValidadtion = require('../../middleWares/teamsValidation.middleware');
const teamsRouter = express.Router();

teamsRouter
  .route('/')
  .post(teamsValidadtion, teamsMiddleWare.teamsMiddleWare)
  .get(teamsMiddleWare.getTeams)

module.exports = teamsRouter