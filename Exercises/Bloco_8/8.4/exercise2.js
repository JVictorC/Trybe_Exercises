const assert = require('assert')
const books = require('./Books')

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, object, index, array) => { 
    if (index === 0) {
      return acc = `${acc}${object.author.name},`
    } else if (index === array.length - 1) {
      return acc = `${acc} ${object.author.name}.`
    } else {
      return acc = `${acc} ${object.author.name},`
    }
  }, '')
}
assert.strictEqual(reduceNames(), expectedResult);


