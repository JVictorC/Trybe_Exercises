/*6.Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

/*Baby Steps:

1 Crie uma Array com valores
2 Criar uma variavel para amarzenar a quantidade de numeros impares de dentro de uma variavel.
3 percorrar a array pegando cara valor de dentro da array
4 faça um teste logico (comparaçãp) entre o valor que está dentro da array para saber se o % 2 é é difenrente (!>) de 0 (if ((array[index] % 2) !> 0)
5 caso positivo entrar na variavel contadora de impares e incrementar a mesma.

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let valoresImpares = 0;

for (let index = 0; index < numbers.length; index += 1){
    let valor = numbers[index];

    if ((valor % 2) != 0){
        valoresImpares += 1;
    }
}

if (valoresImpares === 0){
    console.log("Nenhum valor impar encontrado")
}else {
    console.log(valoresImpares+' valores impares encontrados');

}
