const uppercase = require('./Request1')

describe('Check if function it works correct', () => {
  it('Should to transform joao in JOAO', (done) => { 
    uppercase('joao', (word) => {
      expect(word).toBe('JOAO')
      done();
    })
  })
  
})