const errorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json( err.message )
  }
  return res.status(500).json({ message: 'Internal error' })

};

module.exports = errorHandler;