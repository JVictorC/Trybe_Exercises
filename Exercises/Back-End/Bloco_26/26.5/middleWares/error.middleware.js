function errorMiddleWare (err,req, res, next) {
  
  if(!err.status) {
    return res.status(err.status).json(err.message);
  }

 return res.status(500).json({message: 'Internal Error'})

}

module.exports = errorMiddleWare