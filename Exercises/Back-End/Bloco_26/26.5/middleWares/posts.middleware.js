const posts = require('../utils/posts')

function postsMiddleWare (req, res) {
  const { id } = req.params

  const post = posts.find((post) => post.id == id)

  console.log(post);

  return res.status(200).json(post);
}

module.exports = postsMiddleWare