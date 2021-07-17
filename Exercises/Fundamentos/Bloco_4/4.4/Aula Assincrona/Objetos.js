
/*  1 Crie um objeto player contendo as variáveis listadas abaixo.
    2 Acesse as chaves name , lastName e age e concatene as suas informações 
    para imprimir no console uma mensagem no seguinte formato: 
    "A jogadora Marta Silva tem 34 anos de idade". 
    3 

*/

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medal: {
        golden: 2,
        silver: 3
    }
}

console.log ('A jogadora ' +  player.name + ' '+ 'tem ' + player.age + ' anos de idade')

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes')

console.log('A jogadora possui ' + player.medal.golden + ' medalhas de ouro e ' + player.medal.silver + ' melhas de prata')