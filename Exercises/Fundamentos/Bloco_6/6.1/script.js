window.onload = function () {
  const btnValidar = document.getElementById('abtnAtivar');
  const fieldDate = document.getElementById('date');

  btnValidar.addEventListener('click', interromperFunção);
  fieldDate.addEventListener('focusout', checkerDate)
  makeStates();
}

function interromperFunção(event) {
  event.preventDefault();
  rideDiv();
}

function makeStates() {
  const Estados = ["Selecione o Estado", "AC", "AL", "AM",
    "AP", "BA", "CE", "DF", "ES", "GO",
    "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE",
    "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  for (let i = 0; i < Estados.length; i += 1) {
    const option = document.createElement('option')
    const divPai = document.getElementById('estados')
    option.value = Estados[i];
    option.innerText = Estados[i]
    divPai.appendChild(option)
  }
}

function checkerDate() {
  let data = document.getElementById('date').value;
  const inputDate = document.getElementById('date')
  data = data.split('/');

  if (data.length > 3) {
    alert('A Data Informada não é correta, Preencha o campo de Data no Padrão DD/MM/YYYY')
    inputDate.placeholder = 'teste'

  } else if (data[0] > 31) {
    alert('O dia infromado está em um formato incorreto')
    inputDate.innerHTML.placeholder = 'teste'

  } else if (data[1] > 12 || data[1] < 0) {
    alert('O mês informado está em um formato incorreto')
    inputDate.innerHTML = placeholder

  } else if (data[2] < 0) {
    alert('O ano infromar está em um formato incorreto')
    inputDate.innerHTML = placeholder

  } else if (data.length === 1) {
    inputDate.placeholder = 'Preencha Este Campo!!'
    inputDate.style.fontSize = '25px'
    alert('Por gentileza Preencha o campo de Data no Padrão DD/MM/YYYY')

  } else {
    inputDate.placeholder = ''
    inputDate.style.fontSize = '16px'
  }


}

function checkerInput(value, object) {
  if (value === '') {
    alert(`O campo ${object} está vazio, por gentileza preenche-lo`)
    return 1;
  }
  return 0;
}

function rideDiv() {
  const inputUser = [
    { nome: document.getElementById('name').value },
    { email: document.getElementById('email').value },
    { cpf: document.getElementById('cpf').value },
    { endereço: document.getElementById('endereço').value },
    { cidade: document.getElementById('cidade').value },
    { estados: document.getElementById('estados').value },
    { resumoCv: document.getElementById('resumo-cv').value },
    { cargo: document.getElementById('cargo').value },
    { descriçãoCargo: document.getElementById('descrição-cargo').value },
    { date: document.getElementById('date').value },
  ]
  for (let i = 0; i < inputUser.length; i += 1) {
    if (separatorTest(inputUser[i]) === 1) {
      break;
    }
    rideSection(inputUser[i], i);
  }
}
function separatorTest(object) {
  let value = Object.values(object)[0]
  let nameObject = Object.keys(object)[0];
  return checkerInput(value, nameObject);
}

function rideSection (object, i) {
  const sectionDiv = document.getElementById('information');
  const hr = document.createElement('hr');
  const div = document.createElement('div')
  const value = document.createElement('p');
  value.innerText = Object.values(object)[0];
  const key = document.createElement('p');
  key.innerText = `${Object.keys(object) [0]}:`
  div.className = 'conteiner-child'
  sectionDiv.appendChild(div);
  const divChild = document.getElementsByClassName('conteiner-child')[i];
  divChild.appendChild(key)
  divChild.appendChild(value)
  divChild.appendChild(hr)
}