const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
const holidays = [24, 25, 31]
const friday = [4, 11, 18, 25]
let teste = 'li.className: '

for (let i in dezDaysList) {

    if (holidays.indexOf(dezDaysList[i]) !== -1) {
        console.log('Holidays ' + dezDaysList[i])
    }

    else if (friday.indexOf(dezDaysList[i]) !== -1) {
        console.log('Friday ' + dezDaysList[i])

    }
    if (friday.indexOf(dezDaysList[i]) !== -1 && holidays.indexOf(dezDaysList[i]) !== -1) {
        console.log("teste: " + dezDaysList[i])
    }

}


// if (holidays.indexOf(dezDaysList[i]) !== -1) {
//     console.log('Holidays ' + dezDaysList[i])
// } else if (friday.indexOf(dezDaysList[i]) !== -1) {
//     console.log('Friday ' + dezDaysList[i])
// }