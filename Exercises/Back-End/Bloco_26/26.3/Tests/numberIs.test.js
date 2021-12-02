const { expect } = require("chai");
const numberIs = require('../numberIs');

describe('Testes na função numberIs', () => {
  describe('Passando numero maior que 0', () => {
    it('deveria detornar "Positivo"', () => {
      const result = numberIs(5);
      expect(result).to.be.equal('Positivo');
    });
  })

  describe('Passando numero menor do que 0', () => {
    it('deveria detornar "Negativo"', () => {
      const result = numberIs(0);
      expect(result).to.be.equal('Neutro');
    });
  })

  describe('Passando o numero 0', () => {
    it('deveria detornar "Neutro"', () => {
      const result = numberIs(-2);
      expect(result).to.be.equal('Negativo');
    });
  })

  describe('Passando um valor diferente do tipo numero', () => {
    it('deveria detornar "o valor deve ser um número"', () => {
      const result = numberIs('xablau');
      expect(result).to.be.equal("o valor deve ser um número");
    });
  })

})
