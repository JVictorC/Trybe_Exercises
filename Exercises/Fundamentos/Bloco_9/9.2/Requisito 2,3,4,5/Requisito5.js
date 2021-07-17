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

const sumArray = (array) => Math.floor(array.reduce((acc, value) => acc += value))


const numberEleventSquare = (generateNumbers) => {
  return new Promise((response, reject) => {
    const number = generateNumbers(arrayWithTen)
    if (number >= 8000) {
      return reject("É mais de oito mil! Essa promise deve estar quebrada!")
    }
    response(number)
  })
}

numberEleventSquare(reduceArray)
  .then(response => diviseNumber(response))
  .then(array => sumArray(array))
  .catch(reject => console.log(reject))