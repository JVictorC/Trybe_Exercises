

function createDivColor(color) {
    let div = document.createElement('div');
    let divPai = document.querySelector('.color-conteiner')
    div.className = 'color'
    div.style.display = 'inline-block'
    div.style.background = color
    divPai.appendChild(div)
}

function createDivColorEscolha(color) {
    let div = document.createElement('div');
    let divPai = document.querySelector('.color-conteiner')
    div.className = 'color choiceUser'
    div.style.display = 'inline-block'
    div.style.background = color
    divPai.appendChild(div)
}

function creteateFont(font) {
    let div = document.createElement('div');
    let divPai = document.querySelector('#font-conteiner')
    div.className = `font ${font}`;
    div.innerText = font
    div.style.display = 'inline-block'
    divPai.appendChild(div)
}

function activeButtonFont(event) {
    const texto = document.querySelector('.artigo')
    const elementoAlvo = event.target;
    let className = elementoAlvo.className
    className = className.replace('font ', '')
    localStorage.setItem('font', className)
    configUser();
}

function activeButtonSize() {
    let imputTamnho = document.getElementsByClassName('imput')[0].value
    const p = document.getElementsByTagName('p')

    for (let i = 0; i < p.length; i += 1) {
        p[i].style.fontSize = `${parseInt(imputTamnho, 10)}px`
    }
    localStorage.setItem('tamanhoFonte', imputTamnho)
}

function activeColor(event) {
    const elementoAlvo = event.target
    let backgroundDiv = elementoAlvo.style.background
    const color = elementoAlvo.style.background

    if (elementoAlvo.className === 'color-conteiner') {

    } else if (backgroundDiv === '') {
        alert('Por gentileza informar uma cor no campo abaixo antes de selecionar este campo')
    } else {
        let elemntP = document.getElementsByTagName('p');
        for (let i = 0; i < elemntP.length; i += 1) {
            elemntP[i].style.color = color
        }
        localStorage.setItem('colorFont', color)
    }
}

function changeColor() {
    const imputColor = document.getElementsByClassName('imput')[1].value
    const divChoiceUser = document.querySelector('.choiceUser')
    divChoiceUser.style.background = imputColor
}

function configUser() {
    const color = localStorage.getItem('colorFont')
    const familyFont = localStorage.getItem('font')
    const fontSize = localStorage.getItem('tamanhoFonte')

    let elemtP = document.getElementsByTagName('p');

    for (let i = 0; i < elemtP.length; i += 1) {
        elemtP[i].style.color = color
        elemtP[i].style.fontFamily = familyFont
        elemtP[i].style.fontSize = `${fontSize}px`

    }
}

window.onload = function () {
    configUser();
    const divPaiFont = document.querySelector('.font-conteiner')
    const divPaiCor = document.querySelector('.color-conteiner')
    const divFontConteiner = document.getElementById('font-conteiner')
    const buttonSize = document.getElementById('tamanho')
    const divColorConteiner = document.querySelector('.color-conteiner')
    const buttonColor = document.getElementById('color')

    divFontConteiner.addEventListener('click', activeButtonFont)
    buttonSize.addEventListener('click', activeButtonSize)
    divColorConteiner.addEventListener('click', activeColor)
    buttonColor.addEventListener('click', changeColor)


}

creteateFont('MontSerrat');
creteateFont('Roboto');
creteateFont('San-Serif');
createDivColor('red');
createDivColor('black');
createDivColor('orange');
createDivColorEscolha();


