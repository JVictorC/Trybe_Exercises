const { TestWatcher } = require('jest');
const {
  findAnimalByName,
  getAnimal,
  getAnimalAge
} = require('./Request6')


describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testes na função - findAnimalByAge', () => {
  describe('Testa se retornar o Object esperado', () => {
    test('Esperamos o object { name: Soneca, age: 2, type: Dog }, quando passamos a age 2', () => {
      expect.assertions(1);
      return expect(getAnimalAge(2)).resolves.toEqual({ name: 'Soneca', age: 2, type: 'Dog' })
    })
  })
  describe('Testa se retornar um erro quando passamos uma idade que nbão retornar nada', () => {
    test('Testa se retorna a frase: Não foi possivel achar um animal com a idade de 6', () => {
      expect.assertions(1)
      return expect(getAnimalAge(3)).rejects.toBe('Não foi possivel achar um animal com a idade de 3')
    })
  })
})