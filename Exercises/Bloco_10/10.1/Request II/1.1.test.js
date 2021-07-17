const { expect, test } = require('@jest/globals');
const {
  encode,
  decode,
} = require('./1.1.js')

describe('Test in Function encode e Decode', () => {
  test('Check if encode and decode are a function', () => {
    expect.assertions(2)
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();

  })
  test('check if vowels are converted in numbers call to function encode', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
  })
  test('check if a numbers are converted in letter', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  })
  test('check if others number than not be vowels are converted in DECODE', () => { 
    expect(decode('jb')).toBe('jb')
  })
  // test('check if others letter than not be 1 of 5')
})