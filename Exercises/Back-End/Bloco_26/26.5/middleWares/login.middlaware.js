const generate_token = require('../utils/generateToken')

function loginMiddleWare (req, res, next) {
  const token = generate_token(12)

  return res.status(200).json({ "token": `${token}` })
}

module.exports = loginMiddleWare;