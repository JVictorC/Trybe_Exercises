/*4- Depois, faça uma pirâmide com n asteriscos de base: 

n = 5

  *
 ***
***** 

*/

let n = 5;

let asteriscos = '';

let espaços = '';

let teste = '';


for (let i = 1; i <= n; i += 1) {

  if ((i % 2) === 0) {
    asteriscos += "*"
    console.log(" ");
  } else {
    asteriscos += '*';

    for(e = espaços.length; e <= n - i; e += 1){
      espaços += ' ';

      if(espaços.length >= n - i){
        break;
      }
      

    }



    console.log(espaços + asteriscos)
    espaços = ' ';




  }
  
   

  
}