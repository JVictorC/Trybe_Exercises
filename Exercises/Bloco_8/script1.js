const newEmployees = () => {
  const employees = {
    id1: (callback) => {
      return console.log(callback('Pedro Guerra'));
    }, // Nome: Pedro Guerra
    id2: (callback) => {
      return console.log(callback('Luiza Drumond'));
    }, // Nome: Luiza Drumond
    id3: (callback) => {
      return console.log(callback('Carla Paiva'));
    }, // Nome: Carla Paiva
  }
  return employees;
};

const createNewPerson = (name) => {
  const newObject = {
    name: name,
    email: `${name}@trybe.com`
  }
  return newObject;
} 

newEmployees().id1(createNewPerson);
newEmployees().id2(createNewPerson);
newEmployees().id3(createNewPerson);