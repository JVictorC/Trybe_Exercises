/*2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;*/
/*Baby Steps:

1 Crie uma Array com valores
2 Some todos os valores, para isso tenho que criar uma variavel para armazenar os resultados das somas
3 Percorrer a Array para somar os valores dentro dela (valor de cada indice)
4 Imprimir = Console.log()

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index]
}
console.log ('Soma dos Valores da Array: ' + soma )