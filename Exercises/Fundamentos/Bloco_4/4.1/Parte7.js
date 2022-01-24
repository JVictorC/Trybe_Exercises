/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: */

let porcentagem = 80;
let notaAaF;

if (porcentagem > 100 || porcentagem < 0){
    console.log("Informe um valor somente de 0 a 100")
}else if (porcentagem >= 90) {
    notaAaF = 'A';
    console.log(notaAaF)
} else if (porcentagem >= 80) {
    notaAaF = 'B';
    console.log(notaAaF);
} else if (porcentagem >= 70) {
    notaAaF = 'C';
    console.log(notaAaF);
} else if (porcentagem >= 60) {
    notaAaF = 'C';
    console.log(notaAaF);
} else if (porcentagem >= 50) {
    notaAaF = 'E';
    console.log(notaAaF);
} else if (porcentagem < 50) {
    notaAaF = 'F';
    console.log(notaAaF);
} 