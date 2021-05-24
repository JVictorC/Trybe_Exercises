/*2- Para o segundo exercício, 
faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 
asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****

*/

/* Baby Steps:

1 Criei duas variaveis

2 utileizei um for

3 eu juntei os astetiscos usando a propriedade  +=

*/


let n = 5;

let asteriscos = '';

for (index = 0; index < n; index+= 1){
    asteriscos += '*';
    console.log(asteriscos)
}