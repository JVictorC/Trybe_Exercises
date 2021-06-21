const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeLesso2 = (object, key, value) => {
  lesson2[key] = value
  console.log(lesson2);
}

changeLesso2(lesson2, 'turno', 'manhã')

console.log('-------------------------------------------------------------');

const keysObjects = object => {
  object = Object.keys(object);
  console.log(object);
}

keysObjects(lesson1)

console.log('-------------------------------------------------------------');

const lengthObject = object => object = Object.entries(object).length

console.log(lengthObject(lesson1))

console.log('-------------------------------------------------------------');

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })

console.log(allLessons);

console.log('-------------------------------------------------------------');

const totalEtudantes = () => {
  const numberStudent1 = allLessons.lesson1.numeroEstudantes
  const numberStudent2 = allLessons.lesson2.numeroEstudantes
  const numberStudent3 = allLessons.lesson3.numeroEstudantes
  const sum = numberStudent1 + numberStudent2 + numberStudent3

  console.log(`Total de Estudante: ${sum}`);
}

totalEtudantes();

console.log('-------------------------------------------------------------');

const localChave = (obejct, value) => {
  const array = Object.keys(obejct);
  console.log(`${array[value]}: ${obejct[array[value]]}`);
}

localChave(lesson1, 0)

console.log('-------------------------------------------------------------');

const checkValues = (object, key, value) => {
  let validation;

  validation = (object[key] === undefined) ? false : true;
  validation = (object[key] !== value) ? false : true;

  console.log(validation);

}

checkValues(lesson1, 'ab', 'Matemática')