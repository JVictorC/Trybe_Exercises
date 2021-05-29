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


dayMonth();





