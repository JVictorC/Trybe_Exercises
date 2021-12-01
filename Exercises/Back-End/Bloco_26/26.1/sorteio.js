const { questionInt, question } = require('readline-sync');

let continueGame = 'S';

while (continueGame === 'S') {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const answerUser = questionInt('Qual o número você acha que será sorteado?\nR:');

  if (randomNumber === answerUser) {
    console.log('Parabéns, número correto');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }

  continueGame = question('Quer tentar novamente ? (S / N)\nR:').toUpperCase();
  
}


