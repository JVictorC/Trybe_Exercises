const fs = require('fs').promises;

async function getSimpsons(arquivo) {
  const response = await fs.readFile(arquivo, 'utf8');

  return await JSON.parse(response);
}


function detailsCharactersForId(id) {
  return new Promise(async (resolve, reject) => {

    const data = await getSimpsons('simpsons.json');

    const result = data.find((item) => Number(item.id) === id);

    result ? resolve(result) : reject(new Error("id não encontrado"));

  });
}

async function readCharacters(nomeArquivo) {
  try {
    const response = await fs.readFile(nomeArquivo, 'utf8');

    const data = await JSON.parse(response);

    data.forEach((item) => {
      console.log(`${item.id} - ${item.name}`);
    });

  } catch (error) {
    console.log(error.message);
  }
}

async function removeCharactersByIdTenAndSix() {
  const data = await getSimpsons('simpsons.json');
  const arrayFiltered = data.filter((item) => (
    Number(item.id) !== 10 && Number(item.id) !== 6
  ));

  await fs.writeFile('simpsons.json', JSON.stringify(arrayFiltered));
}

async function createFileWithFamily() {
  const data = await getSimpsons();
  const idsValid = [1, 2, 3, 4];
  const arrayFiltered = data.filter((item) => (
    idsValid.includes(Number(item.id))
  ));
  fs.writeFile('simpsonFamily.json', JSON.stringify(arrayFiltered))
}

async function appendNelsonInFamily() {
  const dataSimpson = await getSimpsons('simpsons.json')
  const dataFamily = await getSimpsons('simpsonFamily.json');
  const dataNelson = dataSimpson.filter((item) => (
    item.name === "Nelson Muntz"
  ))
  dataFamily.push(...dataNelson)

  fs.writeFile('simpsonFamily.json', JSON.stringify(dataFamily))
}

async function replaceNelsonByMeggie() {
  const dataSimpson = await getSimpsons('simpsons.json')
  const dataFamily = await getSimpsons('simpsonFamily.json');
  const dataMeggie = dataSimpson.filter((item) => (
    item.name === "Maggie Simpson"
  ));

  const dataFiltered = dataFamily.filter((item) => (
    item.name !==  "Nelson Muntz" 
  ));

  dataFiltered.push(...dataMeggie)
  fs.writeFile('simpsonFamily.json', JSON.stringify(dataFiltered))
}

