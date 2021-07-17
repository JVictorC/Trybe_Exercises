const books = require('./Books')
const assert = require('assert')

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const objectGenreFiccao = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  const namesAuthorsFiccao = objectGenreFiccao.map((book) => book.author.name)
  return namesAuthorsFiccao.sort()

}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
console.log(fantasyOrScienceFictionAuthors());