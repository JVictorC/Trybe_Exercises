const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const animal = Animals.filter((animal) => animal.name === name)
    if (animal.length > 0) {
      resolve(animal[0])
    } else {
      reject('Nenhum animal com esse nome!')
    }
  })
};

const getAnimal = async (name) => {
  const object = await findAnimalByName(name)

  return object
};

const getAnimalAge = async (age) => {
  const objc = await findAnimalById(age)
  return objc
}

const findAnimalById = (age) => {
  return new Promise((resolve, reject) => {
    const objectSelect = Animals.find(objc => objc.age === age)
    if (objectSelect !== undefined) {
      resolve(objectSelect)
    } else {
      reject(`Não foi possivel achar um animal com a idade de ${age}` )
    }
  })
}

const teste = async () => {
console.log(await getAnimalId(6))
}

teste()

module.exports = {
  findAnimalByName,
  getAnimal,
  getAnimalAge
}
