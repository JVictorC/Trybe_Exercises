const posts = require('../utils/posts')

function postsVerification (req, res, next) {
  const { id } = req.params;

  const idValid = posts.find((post) => post.id == id);
    
  if(!idValid) {
    return res.status(404).json({ "message": "post not found" })
  }

  next()
}

module.exports = postsVerification