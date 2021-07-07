// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const joinsJokes = (joker) => {
  const localJoker = document.getElementById('jokeContainer');
  const textJoker = joker
  localJoker.innerText = textJoker;
}


const fetchJoke = (callback) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(objc => callback(objc.joke))
}
window.onload = () => fetchJoke(joinsJokes);