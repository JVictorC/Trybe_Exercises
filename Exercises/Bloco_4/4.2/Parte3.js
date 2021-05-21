/*3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;*/

/*Baby Steps:

1 Crie uma Array com valores
2 Criar duas variaveis uma para armazenar os valores da soma de cada indice da array e outra para armazenar a media 
3 percorrer a array para somarmos todos os indice dentro dela
4 pegar o resultado da variavel soma e dividir pela largura da array, ou seja, pelo numeros de elementos, para isso usamos .length, isso dentro da atribução de valores da media.
5 Imprimir o resultado da variavel media.

*/




let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let soma = 0;
let media = 0;

for(let index = 0; index < numbers.length; index+=1){
    media = media + numbers[index]
    
}
soma = soma/ numbers.length


console.log('Media dos Valores:' + media)

