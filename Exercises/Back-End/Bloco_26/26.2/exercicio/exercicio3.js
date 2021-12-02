const biggerThanFifty = require('./exercicio1')


const randomNumber = () => Math.floor(Math.random() * 100 + 1);

async function main() {
  try {
    const result = await biggerThanFifty(randomNumber(), randomNumber(), randomNumber());
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

main();