const { questionFloat } = require('readline-sync');

const calcImc = (altura, peso) => {
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  if (imc < 18.5) { return 'Abaixo do peso (magreza)' }
  else if(imc >= 18,5 && imc <= 24.9) { return 'Peso normal' }
  else if(imc >= 25,0 && imc <= 29,9) { return 'Acima do peso (sobrepeso)' }
  else if(imc >= 30,0 && imc <= 34.9) { return 'Obesidade grau I' }
  else if(imc >= 35,0 && imc <= 39.9) { return 'Obesidade grau II' }
  else { return 'Obesidade grau III e IV'}

};

const altura = questionFloat('Qual é sua Altura\nR:');

const peso = questionFloat('Qual é seu Peso\nR:');

console.log(`${calcImc(altura, peso)}`);
