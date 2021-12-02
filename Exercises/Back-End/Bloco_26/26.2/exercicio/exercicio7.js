const readline = require('readline-sync');
const fs = require('fs').promises;


const getData = async (arquivo) => {
  const data = await fs.readFile(arquivo, 'utf8');

  try {
    const json = JSON.parse(data)
    return json; 
  } catch (error) {
    return data;
  }
}

function readFile(file) {
  return new Promise(async (resolve, reject) => {
    try {
      await fs.readFile(file, 'utf8');
      resolve();
    } catch (error) {
      reject(new Error('Arquivo inexistente'));
    }
  })
}

async function main() {
  const arquivo = readline.question('Qual o arquivo que deseja alterar ?\nR:');
  try {
    await readFile(arquivo);
    const palavraParaTrocar = readline.question('Qual a palavra que deseja substituir ?\nR:');
    const novaPalavra = readline.question('Qual será a nova palavra ?\nR:');

    const file = await getData(arquivo);
    
    const newWord = file.replace(new RegExp(palavraParaTrocar, 'g'), novaPalavra)

    const nomeArquivo = readline.question('Qual será o nome a ser Salvo?\nR:')
    
    fs.writeFile(nomeArquivo, newWord);

  } catch (error) {
    console.log(error.message)
  }
}

main()