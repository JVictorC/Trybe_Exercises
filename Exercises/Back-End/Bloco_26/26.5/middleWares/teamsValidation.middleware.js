function teamsValidadtion(req, res, next) {
  try {
    const { name, initials, country, league } = req.body;

    if(!name || !initials || !country) {
      throw new Error(`Campo ${!name && 'name' || !initials && 'initials' || !country && 'country'} não informado`)
    }

    const validation = [
      (name.length > 5),
      (initials.length <= 3),
      (country.length > 3),
    ];
    
    if(validation.includes(false)) {
      return res.status(400).json({ "message": "invalid data" })
    }
    
    next();

  } catch (error) {
    return res.status(400).json({message: `${error.message}`})
  }
}

module.exports = teamsValidadtion;