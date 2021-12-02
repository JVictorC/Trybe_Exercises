const biggerThanFifty = require('./exercicio1')

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

biggerThanFifty(randomNumber(), randomNumber(), randomNumber())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  })