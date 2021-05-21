/*Utilizando o array criado no exercício anterior imprima o 
resultado da divisão de cada um dos elementos por 2 .*/

/*Baby Steps:

1 Crie uma Array sem valores
2 crie um loop
3 utilizando o push vai emborando o valor de index para dentro da array.
4 dentro do loop usamos console.log

*/

let number = [];

for (let index = 0; index <= 25; index += 1) {
    number.push(index)
    console.log(number[index]/2);
}

