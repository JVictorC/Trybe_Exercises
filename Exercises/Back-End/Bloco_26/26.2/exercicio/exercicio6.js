const readline = require('readline-sync');
const fs = require('fs').promises;

const getFile = async (file) => {
  try {
    const result = await fs.readFile(file, 'utf8');
    try {
      console.log(JSON.parse(result));
    } catch (error) {
      console.log(result);
    }
  } catch (error) {
    console.log('Arquivo inexistente');
  }
};


const arquivo = readline.question('Qula é o Arquivo que deja ler ?\nR:');


getFile(arquivo);
