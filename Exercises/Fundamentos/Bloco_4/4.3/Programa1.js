/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
n = 5

*****
*****
*****
*****
*****
*/


/*baby Steps:
1 Variavel com um valor > 1;
*  Criar uma array para armazenar os asteriscos
2 Imprima na tela = Console.log
3 feito de asteriscos com a mesma quantidade passada na variavel N
*/

/* Passos feitos:

1 Criei duas variaveis

2 utileizei dois for

3 eu juntei os astetiscos usando a propriedade  +=



*/

let n = 3;
let asteriscos = '';



for (let index = 0; index < n; index += 1){
    asteriscos += '*';
 
}

for (let index = 0; index < n; index +=1){

    console.log(asteriscos)

}

