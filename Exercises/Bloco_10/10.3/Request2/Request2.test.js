let generateNumberRandom = require('./Request2')


describe('When to calling generateNumberRandom should parsed two paremeter e return divided us', () => {
  generateNumberRandom = jest.fn();
  generateNumberRandom.mockImplementation((number1, number2) => number1 / number2)

  it('should return a results of the divise betwenn 10 and 5', () => {
    expect.assertions(1)
    expect(generateNumberRandom(10, 5)).toBe(2)
  })
  it('should return number 10', () => {
    generateNumberRandom = jest.fn().mockImplementation(Math.floor(Math.random() * 100) + 1).mockReturnValue(10)
    expect.assertions(1)
    expect(generateNumberRandom()).toBe(10)
  })
})
