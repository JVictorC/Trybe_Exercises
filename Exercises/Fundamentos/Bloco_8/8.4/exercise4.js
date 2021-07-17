const assert = require('assert')
const books = require('./Books')

const expectedResult = [{
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}];

function longestNamedBook() {
  const nameBigger = books.reduce((acc, objectBook) => {
    return acc = (objectBook.name.length >= acc) ? objectBook.name : acc;
  }, '')
  return books.filter((book) => book.name === nameBigger)
}


assert.deepStrictEqual(longestNamedBook(), expectedResult);