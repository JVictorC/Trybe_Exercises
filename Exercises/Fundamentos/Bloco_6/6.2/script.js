window.onload = function () {
  rideSelectStates()
  const date = document.getElementById('date');

}


function rideSelectStates() {
  let states = ["Selecione o Estado", "AC", "AL", "AM", "AP", "BA", "CE",
    "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
    "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];


  for (let i = 0; i < states.length; i += 1) {
    const option = document.createElement('option');
    const divParent = document.getElementById('states');
    option.value = states[i];
    option.innerText = states[i];
    divParent.appendChild(option);

  }

}

