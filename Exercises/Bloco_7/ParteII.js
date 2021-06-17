/*Parte II
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */


// 1

const fatorial = (value) => {
  let fatorial = 0;
  for (let i = 1; i < value; i += 1) {
    fatorial += i * value
  }
  console.log(fatorial);
}

fatorial(4);

// 2

// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (value) => {
  let maiorPalvra = '';
  value = value.split(' ');
  for (let index of value) {
    maiorPalvra = (index.length > maiorPalvra.length) ? index : maiorPalvra;
  }
  console.log(maiorPalvra);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")


// 3

/*Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

window.onload = () => {
  let counter = document.getElementById('resultado')
  const btnClick = document.getElementById('button')
  btnClick.addEventListener('click', () => {
    value = parseInt(counter.innerText);
    value += 1
    counter.innerText = value;
  })
}

