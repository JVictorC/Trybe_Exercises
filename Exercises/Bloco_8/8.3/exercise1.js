const books = require('./Books')
const assert = require ('assert')

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  return books.map((book) => {
    const nameBook = book.name
    const genreBook = book.genre
    const nameAuthorBook = book.author.name
    return `${nameBook} - ${genreBook} - ${nameAuthorBook}`
  })
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);

console.log(formatedBookNames());