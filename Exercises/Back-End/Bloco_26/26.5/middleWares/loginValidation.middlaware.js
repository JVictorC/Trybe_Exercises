function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function Loginvalidation(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      "message": `campo ${!email && 'email' || !password && 'senha'} não esta informado`
    })
  }

  const validation = [
    validateEmail(email),
    (password.length <= 8 && password.length > 4)
  ];

  if (validation.includes(false)) {
    return res.status(400).json({ "message": "email or password is incorrect" })
  }
  next();
}

module.exports = Loginvalidation