/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 */

/*Somente com 3 peças porém a logica é a mesma */


let peça = "BISPO"

switch (peça.toLocaleLowerCase()) {
    case "cavalo":
        console.log("No formato de um L");
        break;
    case "bispo":
        console.log("Nas diagonais");
        break;
    case "rainha":
        console.log("No formato de uma Cruz pelo tabuleiro")
        break;
    default:
        console.log("Peça não configurada, teste as seguiontes: cavalo, bispo e rainha")
}