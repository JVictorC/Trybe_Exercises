const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => {
    const wordList = name.split('');
    wordList.forEach((letter) => (letter === 'a' || letter === 'A') ? acc += 1 : acc)
    return acc
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);