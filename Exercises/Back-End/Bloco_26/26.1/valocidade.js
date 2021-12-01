const { questionInt } = require('readline-sync');

const calcVelocidade = (distancia, tempo) => {
  return distancia / tempo;
}

const tempo = questionInt('Informe a tempo:\nR:'); 
const distancia = questionInt('Informe a distancia:\nR:'); 

console.log(calcVelocidade(distancia, tempo));