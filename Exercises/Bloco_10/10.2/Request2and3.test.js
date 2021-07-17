const { TestWatcher } = require('jest')
const {
  findUserById,
  getUserName,
} = require('./Request2and3')

describe('Test in GetUserName', () => {
  test('Check if have an user with id passed', () => {
    return getUserName(5).then((data) => {
      expect(data).toBe('Paul')
    })
  })
  test('Check if not have an user with id passed', () => {
    return getUserName(6).then((data) => {
      expect(data).toEqual({ error: 'User with 6 not found.' })
    }) 
  })
  test('Test in Promise with asyn e Await', async () => {
    const response = await getUserName(5)
    expect(response).toBe('Paul');
  })
})