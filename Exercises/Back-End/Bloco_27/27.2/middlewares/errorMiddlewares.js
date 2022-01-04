const errorMiddleware = (err, _req, res, _next) => {
  if(err.code) {
    return res.status(err.code).json({message: err.message});
  }
  return res.status(500).json({message: "Internal Error"})
};

module.exports = errorMiddleware