let generateNumberRandom = require('./Request1')



describe('Test in generateNumberRandom function', () => {
  it('Should return a number', () => {
    generateNumberRandom = jest.fn().mockReturnValueOnce(10)
    expect.assertions(3)
    expect(generateNumberRandom()).toBe(10)
    expect(generateNumberRandom).toHaveBeenCalled();
    expect(generateNumberRandom).toHaveBeenCalledTimes(1)
  })
})