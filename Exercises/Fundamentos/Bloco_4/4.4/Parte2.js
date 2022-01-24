
/*

.split () = separa uma letra da outra
. reverse () = Invernte as sequencia, ou seja, o que ta no final vai pro inicio
.join() = junta o texto separado pelo o splint


link consulta: https://pt.stackoverflow.com/questions/5943/como-inverter-uma-string-em-javascript

EX: 

let teste = "Victor".split('').reverse('').join('')

console.log(teste)

return in terminal = rotciV
*/

/* 1 Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

console.log("Parte 1")
function verificadorPalindromo(palavra) {
    let contrario = palavra.split('').reverse('').join('');


    if (contrario === palavra) {
        return true;
    } else {
        return false;
    }

}
console.log(verificadorPalindromo('Victor'))

console.log("-----------------------------------------------------------------------------------------------");
console.log("Parte 2")

let lista = [2, 3, 6, 7, 10, 1];

function indiceMaiorNumero(list) {
    let maxNumber = Math.max(...list)
    let indiceMaiorNumero = 0;
    for (let i = 0; i < list.length; i += 1) {
        if (maxNumber === list[i]) {
            indiceMaiorNumero = i;
        }
    }
    return indiceMaiorNumero;
}

console.log(indiceMaiorNumero(lista))



console.log("-----------------------------------------------------------------------------------------------");
console.log("Parte 3")

function indiceMenorNumero(list) {
    let min = Math.min(...list)
    let indiceMenor = 0;

    for (let i = 0; i < list.length; i += 1) {
        if (min === list[i]) {
            indiceMenor = i;
        }
    }

    return indiceMenor;

}

let lista2 = [2, 4, 6, 7, 10, 0, -3];

console.log(indiceMenorNumero(lista2))

console.log("-----------------------------------------------------------------------------------------------");
console.log("Parte 4")
/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(list) {
    let maiorNome = " ";

    for (let i = 0; i < list.length; i += 1) {
        if (maiorNome.split('').length < list[i].split('').length) {
            maiorNome = list[i]
        }
    }
    return maiorNome;
}

console.log(maiorNome(nomes))

console.log("-----------------------------------------------------------------------------------------------");
console.log("Parte 5")

/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .*/

let listaReptição = [2, 3, 2, 5, 8, 2, 3];

let contador = 0;
let numero = [];
function maisSeRepete(list) {
    for (let i = 0; i < list.length; i += 1) {
        for (let index = 0; index < list.length; index += 1) {
            if (list[index] === list[i]) {
                contador += 1;
            }
        }
        /*push number for let numero*/
        numero.push(contador)
        /*Resetando contado*/
        contador = 0;
    }
    
    let maiorRepetição = Math.max(...numero)

    for (let i = 0; i < list.length; i += 1) {
        for (let index = 0; index < list.length; index += 1) {
            if (list[index] === list[i]) {
                contador += 1;
            }
        }
        if (maiorRepetição === contador) {
            return list[i]
        }
        /*Resetando contado*/
        contador = 0;
    }

}

console.log(maisSeRepete(listaReptição))

console.log("-----------------------------------------------------------------------------------------------");
console.log("Parte 6")

let n = 5;

function somaTodosOsNumeros(number) {
    let sum = 0;
    for (let i = number; i <= number; i -= 1) {

        if (i === 0) {
            break;
        }
        sum += i
    }
    return sum
}

console.log(somaTodosOsNumeros(n));

console.log("-----------------------------------------------------------------------------------------------");
console.log("Parte 7")