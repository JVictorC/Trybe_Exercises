let {
  UpperCase,
  firstLetter,
  concatStrings
} = require('./Request5')

describe('Test inf UpperCase Function', () => {
  UpperCase = jest.fn(string => string.toLowerCase())
  it('Should trnasform JOAO in joao', () => {
    expect(UpperCase('JOAO')).toBe('joao')
  })
  it('Should be transform joao in JOAO', () => {
    UpperCase.mockRestore()
    UpperCase = jest.fn(string => string.toUpperCase())
    expect(UpperCase('joao')).toBe('JOAO')
  })
})