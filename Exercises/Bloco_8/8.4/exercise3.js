const assert = require('assert')
const books = require('./Books')

const expectedResult = 43;

function averageAge() {
    return books.reduce((acc, objectBook, index, array) => {
    const calc = acc + objectBook.releaseYear - objectBook.author.birthYear
    if (index === array.length - 1) {
      const qtdValues = array.length
      return calc / qtdValues
    }
    return calc;
  },0)
}

assert.strictEqual(averageAge(), expectedResult);