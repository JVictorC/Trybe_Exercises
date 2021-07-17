const { TestWatcher } = require('jest');
const getRepos = require('./Request4');

describe('Test In API, check if exist Objc', () => {
  const URL = 'https://api.github.com/orgs/tryber/repos';
  test('check Objc', () => {
    expect.assertions(2)
    return getRepos('https://api.github.com/orgs/tryber/repos').then((value) => {
      expect(value).toContain('sd-01-week4-5-project-todo-list')
      expect(value).toContain('sd-01-week4-5-project-meme-generator')
    })
  })
})