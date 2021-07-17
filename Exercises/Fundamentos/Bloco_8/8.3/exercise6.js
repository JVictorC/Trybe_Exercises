const books = require('./Books');
const assert = require('assert');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  const booksMoreOld60 = books.filter((book) => 2021 - book.releaseYear > 60)
  const namesBooksOld = booksMoreOld60.map((book) => book.name)
  return namesBooksOld;
}

assert.deepStrictEqual(oldBooks(), expectedResult);

console.log(oldBooks());