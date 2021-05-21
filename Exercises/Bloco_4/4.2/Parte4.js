/*4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
"valor menor ou igual a 20";*/

/*Baby Steps:

1 Crie uma Array com valores
2 Criar duas variaveis uma para armazenar os valores da soma de cada indice da array e outra para armazenar a media 
3 percorrer a array para somarmos todos os indice dentro dela
4 pegar o resultado da variavel soma e dividir pela largura da array, ou seja, pelo numeros de elementos, para isso usamos .length, isso dentro da atribução de valores da media.
5 Imprimir o resultado da variavel media.
6 fazer uma comparação entre o resultado da variavel media, testando se ela é maior ou menor que 20, caso seja maior retornar 'valor maior que 20'

*/




let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index]
}

media = soma / numbers.length

console.log('A media é: ' + media)

if (media > 20){
    console.log ('Valor maior que 20');

} else {
    console.log('Valor menor ou igual a 20');
}
