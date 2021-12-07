const teams = require('../utils/teams')

function teamsMiddleWare(req, res) {
  const { name, initials, country, league } = req.body;

  teams.push(
    { name, initials, country, league }
  )

  return res.status(200).json({
    name, initials, country, league
  });
}


function getTeams(req, res) {

  return res.status(200).json(teams)

}

module.exports = { teamsMiddleWare, getTeams }