function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu código abaixo.



// Exercicio 1

function dayMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const holidays = [24, 25, 31]
  const friday = [4, 11, 18, 25]
  const daysList = document.querySelector('#days');

  for (i = 0; i < dezDaysList.length; i += 1) {
    let li = document.createElement('li');
    li.innerHTML = dezDaysList[i];
    li.className = 'days'

    if (holidays.indexOf(dezDaysList[i]) !== -1) {
      li.className = 'days holidays'

    }

    else if (friday.indexOf(dezDaysList[i]) !== -1) {
      li.className = 'days friday'

    }

    if (friday.indexOf(dezDaysList[i]) !== -1 && holidays.indexOf(dezDaysList[i]) !== -1) {
      li.className = 'days holidays friday'

    }

    daysList.appendChild(li)
  }
}
// Exercicio 2

function createButtunHoliday() {
  let paiBotao = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  botao.innerText = 'Feriados';
  botao.id = 'btn-holiday'
  paiBotao.appendChild(botao);
}

// Exercicio 4
function createButtonFriday() {
  let paiButton = document.querySelector('.buttons-container')
  let buttonFriday = document.createElement('button')
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = 'Sexta-Feira'
  paiButton.appendChild(buttonFriday)
}

window.onload = function () {
  let botaoHolidays = document.querySelector('#btn-holiday')
  let botaoFriday = document.querySelector('#btn-friday')

  botaoHolidays.addEventListener('click', activatedButtonHoliday)
  botaoFriday.addEventListener('click', activatedButtonFriday)

  adicionarTarefa('Projetos:');
  legenda('Green');

  let myTaskDiv = document.querySelector('#my-tasks');
  myTaskDiv.addEventListener('click', tarefaSelection)
  myTaskDiv.className = 'task'
 
}

// Exercicio 3

function activatedButtonHoliday() {
  let classHolidays = document.getElementsByClassName('holidays')
  let background = classHolidays[0].style.background
  if (background == 'white') {
    for (let i = 0; i < classHolidays.length; i += 1) {
      classHolidays[i].style.background = 'rgb(238,238,238)';
    }
  } else {
    for (let i = 0; i < classHolidays.length; i += 1) {
      classHolidays[i].style.background = 'white';
    }
  }
}

// Exercicio 5

function activatedButtonFriday() {
  let classFridays = document.getElementsByClassName('friday');
  let color = classFridays[0].style.color
  if (color === 'green') {
    for (let i = 0; i < classFridays.length; i += 1) {
      const friday = [4, 11, 18, 25];
      classFridays[i].innerText = friday[i];
      classFridays[i].style.color = '#777'
    }

  } else {
    for (let i = 0; i < classFridays.length; i += 1) {
      classFridays[i].innerText = 'SEXTOU';
      classFridays[i].style.color = 'green'
    }

  }
}

// Exercicio 6

function onMouseOver(event) {
  event.target.style.fontSize = '25px'
}

function onMouseOut(event){
  event.target.style.fontSize = '20px'
}

// Exercicio 7

function adicionarTarefa(tarefa) {
  let elementPai = document.getElementsByClassName('my-tasks')[0];
  let span = document.createElement('span')
  let ul = document.createElement('ul')
  let li = document.createElement('li')
  elementPai.appendChild(span)
  span.innerText = tarefa;


}

// Exercicio 8

function legenda(cor) {
  let elementPai = document.getElementsByClassName('my-tasks')[0];
  let div = document.createElement('div');
  elementPai.appendChild(div)
  div.id = 'my-tasks'
  div.style.backgroundColor = cor
}

// Exercicio 9

function tarefaSelection() {
  let paiLists = document.getElementById('days')
  let myTaskDiv = document.querySelector('#my-tasks');
  if (myTaskDiv.className === 'task selected') {
      myTaskDiv.className = 'task';
      console.log(myTaskDiv.className);
      console.log(myTaskDiv);
  } else {
    myTaskDiv.className = 'task selected'
    console.log(myTaskDiv.className);
    console.log(myTaskDiv);

  }
}

// Exercicio 10

function onClick (event){
  let DivTasks = document.getElementById('my-tasks')
  let className = DivTasks.className
  if(className === 'task'){
    event.target.style.color = '#777'

  } else {
    event.target.style.color = 'green'
  }
}


dayMonth();
createButtunHoliday();
createButtonFriday()




