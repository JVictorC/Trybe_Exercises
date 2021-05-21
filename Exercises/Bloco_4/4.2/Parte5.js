/*5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;*/

/*Baby Steps:

1 Crie uma Array com valores
2 Criar uma variavel para amarzenar o maiorNumero, sendo importante nesse codigo já começar atribuindo um valor de 0
3 Percorar a array descobrindo cara valor dentro de cada index
4 comparar o valor da array[index] com a variavel maiorNumero para descobrir qual é maior
5 se for maior que a variavel maiorNumero trocar o valor da mesma pelo o valor do array[index]

*/




let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let valor = numbers[index];

    if (valor > maiorNumero) {
        maiorNumero = valor;
    }
}

console.log(maiorNumero);
