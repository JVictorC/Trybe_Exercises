function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function VerificationRegister (req, res, next) {
  const { username, email, password } = req.body;

  const validation = [
    (username.length > 3),
    validateEmail(email),
    (password.length <= 8 && password.length > 4)
  ];

  if (validation.includes(false)) {
    console.log('Deu ruim');
    return res.status(400).json({ "message": "invalid data" })
  }
  next();
}

module.exports = VerificationRegister;