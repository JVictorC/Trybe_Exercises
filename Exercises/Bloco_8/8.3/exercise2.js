const books = require('./Books');
const assert = require('assert')

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
  const namesAndAges = books.map((book) => {
    const ageAuthor = book.releaseYear - book.author.birthYear
    const nameAuthor = book.author.name
    return { age: ageAuthor, author: nameAuthor }
  })
  namesAndAges.sort((value1, value2) => value1.age - value2.age)
  return namesAndAges;
}

assert.deepStrictEqual(nameAndAge(), expectedResult);

console.log(nameAndAge());