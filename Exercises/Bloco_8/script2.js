const prizeDraw = (number, callBack) => {
 return (number === callBack()) ? "Parabéns você ganhou" : "Tente novamente";
}

const gerenateNumberRandom = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1
  return randomNumber;
}

console.log(prizeDraw(3 ,gerenateNumberRandom));