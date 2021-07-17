let generateNumberRandom = require('./Request3')


generateNumberRandom = jest.fn()
  .mockImplementationOnce((num1, num2, num3) => num1 * num2 * num3)
  .mockImplementationOnce(number => number * 2)


describe('Test in generateNumberRandom, but with a new functionality', () => {
  describe('Test if return the multiplication', () => {
    it('should return 150 when pased the numbers 5,5,5', () => {
      expect.assertions(3)
      expect(generateNumberRandom(5, 5, 5)).toBe(125)
      expect(generateNumberRandom).toHaveBeenCalled()
      expect(generateNumberRandom).toHaveBeenCalledTimes(1)
    })
  })

  describe('Teste if return double of the a number', () => { 
    it('Should return 10 when is passed the number 5', () => {
      expect(generateNumberRandom(5)).toBe(10)
    })
  })

})