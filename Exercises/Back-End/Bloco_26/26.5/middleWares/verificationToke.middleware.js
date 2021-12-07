function verificationToke(req, res, next) {
  const { token } = req.headers
  if(!token || token.length !== 12) {
    return res.status(401).json({ "message": "invalid token" })
  }

  next();
}

module.exports = verificationToke