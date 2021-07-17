const arrayWithTen = () => {
  const array = []
  const randomNumber = Math.floor(Math.random() * 50)
  while (array.length < 10) {
    array.push(Math.pow(randomNumber, 2))
  }
  return array;
}

const reduceArray = (callback) => callback().reduce((acc, value) => acc += value)

const diviseNumber = (value) => {
  const arrayDiv = [2, 3, 5, 10];
  return arrayDiv.map((number) => value / number)
}

const numberEleventSquare = (generateNumbers) => {
  return new Promise((response, reject) => {
    const number = generateNumbers(arrayWithTen)
    if (number >= 8000) {
      return reject('Promise rejeitada')
    }
    response(number)
  })
}

numberEleventSquare(reduceArray)
  .then(response => console.log(diviseNumber(response)))
  .catch(reject => console.log(reject))