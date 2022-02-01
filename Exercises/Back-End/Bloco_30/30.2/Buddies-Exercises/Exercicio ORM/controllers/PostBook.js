const {Book} = require('../models');

const createBook = async (req, res) => {
  const {title, author, pageQuantity } = req.body;
  const newBook = await Book.create({ title, author, pageQuantity })
  return res.status(200).json(newBook);
}

const updateBookByID = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const {id} = req.params;

  const newBook = await Book.update(
    { title, author, pageQuantity }, 
    {where: {id} }
  );
  
  return res.status(200).json({id, title, author, pageQuantity});
}

module.exports = {
  createBook,
  updateBookByID
}