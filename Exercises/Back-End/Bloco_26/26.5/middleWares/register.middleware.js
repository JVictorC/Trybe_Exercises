function RegisterMiddleWare (req, res, next) {
  return res.status(201).json({ "message": "user created" });
}

module.exports = RegisterMiddleWare;