const arrayWithTen = () => {
  const array = []
  const randomNumber = Math.floor(Math.random() * 50)
  while (array.length < 10) {
    array.push(Math.pow(randomNumber, 2))
  }
  return array;
}

const reduceArray = (callback) => callback().reduce((acc, value) => acc += value)


const numberEleventSquare = (generateNumbers) => {
  return new Promise((response, reject) => {
    if (generateNumbers(arrayWithTen) >= 8000) {
      return reject('Promise rejeitada')
    }
    response('Promise resolvida')
  })
}

numberEleventSquare(reduceArray)
  .then(response => console.log(response))
  .catch(reject => console.log(reject))