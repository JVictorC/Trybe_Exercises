let {
  UpperCase,
  firstLetter,
  concatStrings
} = require('./Request4')

UpperCase = jest.fn((string) => string.toLowerCase())
firstLetter = jest.fn(string => string[string.length - 1])
concatStrings = jest.fn((string1, string2, string3) => `${string1} ${string2} ${string3}`)
describe('UpperCase', () => {
  it('Should transform the word JOAO in joao, passed for LowerCase', () => {
    expect.assertions(3)
    expect(UpperCase('JOAO')).toBe('joao')
    expect(UpperCase).toHaveBeenCalled();
    expect(UpperCase).toHaveBeenCalledTimes(1)
  })
})

describe('firstLetter', () => {
  it('Should return O of the frase Hello, because its last', () => {
    expect.assertions(3)
    expect(firstLetter('Hello')).toBe('o')
    expect(firstLetter).toHaveBeenCalled()
    expect(firstLetter).toHaveBeenCalledTimes(1)
  })
})

describe('concatStrings', () => {
  it('Should return Hello World Little', () => {
    expect.assertions(3)
    expect(concatStrings('Hello', 'World', 'Little')).toBe('Hello World Little')
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledTimes(1)
  })
})