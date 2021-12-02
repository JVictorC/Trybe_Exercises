function fizzBuzz(number) {
  return new Promise(
    (resolve, reject) => {
      if(typeof number !== 'number' && number <= 0) {
        reject(new Error('Por favor informar um numero maior que 0'))
      }

      if(number % 3 === 0 && number % 5 === 0) resolve('FizzBuzz');
      if(number % 3 === 0) resolve('Fizz');
      if(number % 5 === 0) resolve('Buzz');
      else {
        reject(number)
      }
    }
  )
}

fizzBuzz(7)
  .then(r => console.log(r))
  .catch(e => console.log(e))