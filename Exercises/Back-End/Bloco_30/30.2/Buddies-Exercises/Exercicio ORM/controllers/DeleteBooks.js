const {Book} = require('../models');

const deleteBookById = async (req, res) => {
  const { id } = req.params;

  const newBook = await Book.destroy({where: {id}});

  return res.status(200).json({message: 'Livro excluído com sucesso'});
}

module.exports = {
  deleteBookById
}