
/*Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
Copie o código abaixo. */

// 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

// 2

/*Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo. */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const teste = [3, 40, 20, 2, 1]
// Seu código aqui.

const sort = (array) => {
  // Function retira da Documentação w3schools.
  array = array.sort(function (a, b) { return a - b })
  return array;
};

console.log(`Os números ${sort(oddsAndEvens)} se encontram ordenados de forma crescente!`);