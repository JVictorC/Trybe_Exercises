const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const numberHits = (correctValues, wrongValues, callback) => callback(correctValues, wrongValues);

const checkerValues = (array1, array2) => {
  let pontos = 0;
  for (let indice in array2) {
    pontos = (array1[indice] === array2[indice]) ? pontos += 1 : pontos -= 0.5;
  }
  console.log(`O total de pontos foi: ${pontos}`);
}

numberHits(rightAnswers, studentAnswers, checkerValues)
