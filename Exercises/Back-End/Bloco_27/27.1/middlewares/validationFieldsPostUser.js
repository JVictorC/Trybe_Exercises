
const validationFieldsPostUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const result = { firstName, lastName, email, password }

  const validation = Object.values(result).map((value) => (
    value === '' || value === undefined
  ))
  
  if (validation.some((value) => value === true)) {
    return res.status(400).json({
      "error": true,
      "message": "Todos os campos tem que está presente firstName, lastName, email, password"
    })
  }
  next();
};

module.exports = validationFieldsPostUser;
