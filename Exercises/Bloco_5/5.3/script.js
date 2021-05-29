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

window.onload = function () {
  let butao = document.querySelector('#btn-holiday')

  butao.addEventListener('click', activatedButton)

}

// Exercicio 3

function activatedButton() {
  let classHolidays = document.getElementsByClassName('holidays')
  let background = document.getElementsByClassName('holidays')[0].style.background
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


// Exercicio 4

function createButtonFriday(){
  let paiButton = document.querySelector('.buttons-container')
  let buttonFriday = document.createElement('button')
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = 'Sexta-Feira'
  paiButton.appendChild(buttonFriday)
  console.log(paiButton)
}



dayMonth();
createButtunHoliday();
createButtonFriday()




