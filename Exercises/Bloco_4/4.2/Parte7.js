/*7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/

/*Baby Steps:

1 Crie uma Array com valores
2 Criamos dua variaveis, uma menorValor e outra maiorNumero para fazer o caminho ao contrario que fizemos na 5.
3 percorrar o array 
5 compare o valor de cada array com o maiorNumero para descobrir se ele é menor
6 caso positivo armazenar o valor na variavel menorValor.

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let maiorNumero = 0;
let menorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let valor = numbers[index]
    if (valor > maiorNumero) {
        maiorNumero = numbers[index]
    }
}

menorNumero = maiorNumero;

for (let index = 0; index < numbers.length; index += 1){
    let valor = numbers[index];
    if (valor < menorNumero){
        menorNumero = valor; 
    }

}

console.log(maiorNumero)
console.log(menorNumero)


