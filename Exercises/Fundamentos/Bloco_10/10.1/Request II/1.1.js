function igualNumberEnconde(letra, numero, vogal) {
  if (letra === vogal) {
    letra = numero;
  }
  return letra;
}

function encode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = [1, 2, 3, 4, 5];
  let palavraLista = string.split('');

  for (let i = 0; i < palavraLista.length; i += 1) {
    for (let index = 0; index < palavraLista.length; index += 1) {
      palavraLista[i] = igualNumberEnconde(palavraLista[i], numeros[index], vogais[index]);
    }
  }
  return palavraLista.join('');
}

function igualNumberDecode(letra, numero, vogal) {
  if (parseInt(letra, 10) === numero) {
    letra = vogal;
  }
  return letra;
}

function decode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = [1, 2, 3, 4, 5];
  let palavraLista = string.split('');

  for (let i = 0; i < palavraLista.length; i += 1) {
    for (let index = 0; index < palavraLista.length; index += 1) {
      palavraLista[i] = igualNumberDecode(palavraLista[i], numeros[index], vogais[index]);
    }
  }
  return palavraLista.join('');
}

module.exports = {
  encode,
  decode,
}

