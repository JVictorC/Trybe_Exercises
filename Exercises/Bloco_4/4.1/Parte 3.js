/*Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. */

let number1 = 2;
let number2 = 10;
let number3 = 20;

if (number1 > number2 && number1 > number3) {
    console.log(number1);
} else if (number2 > number1 && number2 > number3) {
    console.log(number2);
} else {
    console.log(number3);
}