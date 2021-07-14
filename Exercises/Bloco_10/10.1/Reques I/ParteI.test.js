const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  obj1,
  obj2,
  obj3,
} = require("./ParteI.js")

const array = [1, 2, 3, 4];

describe('Test Units in Function Sum Request 1', () => {
  it('Is sum of 4 and 5 = 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
  it('If sum of 0 and 0 = 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  it('If fuction sum rises an error when a parameter is a string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  })
  it('The error message should be: parameters must be numbers', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(/parameters must be numbers/)
  })
})

describe('Test Units in Function myRemove Request 2', () => {
  it('If passed number 3 as second parameter, return as array without number 3', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4])
  })
  it('Check as array not Equal as passed to parameter', () => {
    expect(myRemove(array, 3)).not.toEqual(array)
  })
  it('Check if array passed to parameter not passed by changes', () => {
    expect(array).toEqual(array)
  })
  it('check if return a array expect', () => {
    expect(myRemove(array, 5)).toEqual(array)
  })
})

describe('Test Units in function myRemoveWithoutCopy Request 3', () => {
  it('check if call function with paramerts [1, 2, 3, 4], 3 return as expect array', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4])
  })
  it('check if return of function NOT retunr [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4])
  })
  it('Make a call of funtion and check if there was changes', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4])
  })
  it('check if there was change expect in array', () => {
    expect(myRemoveWithoutCopy(array, 5)).toEqual(array)
  })
})

describe('Test Units in Function myFizzBuzz Request 4', () => {
  it('make a call to funtion with number be divisible by 5 and 3 and check if return was the expect', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  it('make a call to function with a number divisible by 3 and check if return was the expect', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it('make a call to function with a number divisible by 5 and check if return was the expect', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it('make a call to function with a number  that is not divisible by 3 or 5 and check that the return was as expected', () => {
    expect(myFizzBuzz(16)).toBe(16)
  })
  it('make a call to function with parameter isnt number and check if return was expect', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })
})

describe('Check if objects are similar', () => {
  it('check objc 1 is similar as objc 2', () => {
    expect(obj1).toEqual(obj2)
  })
  it('check objc 1 isnt similar as objc 3', () => {
    expect(obj1).not.toEqual(obj3)
  })
  it('check objc 2 isnt similar as objc 3', () => {
    expect(obj2).not.toEqual(obj3)
  })
})