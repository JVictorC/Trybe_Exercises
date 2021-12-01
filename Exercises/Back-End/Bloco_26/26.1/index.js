const { keyInSelect, keyIn } = require('readline-sync');

const choiceUser = keyInSelect(['IMC', 'VELOCIDADE', 'SORTEIO']);

switch (choiceUser) {
  case 0:
    require('./imc')
    break;
  case 1:
    require('./valocidade')
    break;
  case 2:
    require('./sorteio')
    break;
  default:
    keyIn('Resposta invalida para a operação');
    break;
}