/*3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****

*/

/*
Esse programa é a prova que desistencia não me leva a lugar nenhum

fiquei um bom tempo tentando rodar esse codigo e não tenho vergonha de falar isso e nunca vou alterar esse text.

olhando ele agora, pronto parece que é a coisa mais facil, mas demmorei em.



*/

let n = 5;

let asteriscos = '';
let espaçamentos = '';




for (let index = 1; index <= n; index += 1) {

    asteriscos += '*';

    for (let i = espaçamentos.length; i < n - index; i += 1){
        espaçamentos += " ";


    }

  
    let fusão = espaçamentos + asteriscos

    console.log(fusão);
    
    espaçamentos = '';


}

