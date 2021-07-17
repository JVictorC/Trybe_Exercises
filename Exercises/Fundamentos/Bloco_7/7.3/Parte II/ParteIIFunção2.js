const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) => {
  let arrayLengths = [];
  for (index of array) {
    arrayLengths.push(index.length)
  }
  return arrayLengths;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
