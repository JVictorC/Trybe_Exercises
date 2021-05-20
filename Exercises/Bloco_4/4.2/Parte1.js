let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

/*1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele 
contidos com a função console.log() ;*/

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
}









/*6.Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let valoresImpares = 0;

for (let index = 0; index < numbers.length; index += 1){
    let valor = numbers[index];

    if ((valor % 2) === 0){
        valoresImpares += 1;
    }
}

console.log(valoresImpares);*/

/*7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/


let menorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let valor = numbers[index];

    for (let indexSegundo = 0; indexSegundo < numbers.length; indexSegundo += 1) {
        let valor2 = numbers[indexSegundo];

        if (valor < valor2) {
            menorNumero = valor;
        }

    }
}
console.log("oi");