const { Book } = require('../models');

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.findAll(); 
    return res.status(200).json(allBooks);
  } catch (error) {
    console.log(error.message);
  }
}

const getBookById = async (req, res) => {
  try {
    const {id} = req.params;
    const bookById = await Book.findByPk(id); 
    return res.status(200).json(bookById);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getAllBooks,
  getBookById
}