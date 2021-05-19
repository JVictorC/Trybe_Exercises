/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 */

let valor1 = 60;
let valor2 = 60;
let valor3 = 60;

if (valor1+valor2+valor3 === 180){
    console.log(true)

}else if (valor1+valor2+valor3 > 180){
    console.log(false)

}else if (valor1 < 60 || valor2 < 60 || valor3 < 60){
   console.log("valores insufiecientes para formação de um triangulo") 
}
