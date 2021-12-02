const { expect } = require("chai");
const sinon = require('sinon');
const fs = require('fs').promises;
const writeFile = require('../writeFile');


describe('Testes na Função weiteFile', () => {

  before(() => {
    sinon.stub(fs, 'writeFile')
  });

  after(() => {
    fs.writeFile.restore()
  });

  describe('A função', () => {
    it('deveria retorna uma string', async () => {
      const result = await writeFile('nome-arquivo.txt', 'o que tem que ser escrito no arquivo');

      expect(result).to.be.string;
    });

    it('deveria retorna um ok', async () => {
      const result = await writeFile('nome-arquivo.txt', 'o que tem que ser escrito no arquivo');
      expect(result).to.be.ok;
    })
  });
})
