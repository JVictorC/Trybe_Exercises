const books = require('./Books');
const assert = require('assert');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  let bookAuthorWith3 = '';
  books.forEach((book) => {
    const nameSplit = book.author.name.split('');
    const pontos = nameSplit.filter((letter) => letter === '.')
    if (pontos.length === 3) {
      bookAuthorWith3 = book.name
    }
  })
  return bookAuthorWith3;
}

//assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
console.log(authorWith3DotsOnName());