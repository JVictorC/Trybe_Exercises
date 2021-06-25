const books = require('./Books');
const assert = require('assert');

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  // escreva seu código aqui
  const booksMoreOld60 = books.filter((book) => {
    return 2021 - book.releaseYear > 60
  })
  booksMoreOld60.sort((value1, value2) => { 
   return value1.releaseYear - value2.releaseYear
  })
  return booksMoreOld60;
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

console.log(oldBooksOrdered());