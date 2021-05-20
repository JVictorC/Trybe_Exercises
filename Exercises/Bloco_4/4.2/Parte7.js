/*7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/
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


