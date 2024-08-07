// variaveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// callback 1 -> try
function handleTryClick(event) {
    // console.log(event.type)

    if (event.type === 'click' || event.key === 'Enter') {
        event.preventDefault()  // o padrao do event de um buton no form é enviar o formulario, que recarrega a página (por isso prevenir)
        const inputNumber = document.querySelector('#inputNumber').value
        ParsedinputNumber = Number(inputNumber)

        console.log(inputNumber == '')
        if (ParsedinputNumber >= 0 && ParsedinputNumber <=10 && (ParsedinputNumber - Math.round(ParsedinputNumber) == 0) && inputNumber != '') {
            if(ParsedinputNumber == randomNumber) {
                screen1.classList.add('hideScreen')
                screen2.classList.remove('hideScreen')
                screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`
            }
            ParsedinputNumber.value = ''
            xAttempts++
        } else { alert('Somente números inteiros entre 0 e 10!') }
    }
}

// calback 2 -> reset
function handleResetClick (event) {
    randomNumber = Math.round(Math.random() * 10)
    screen1.classList.remove('hideScreen')
    screen2.classList.add('hideScreen')
    xAttempts = 1
}
// eventos
btnTry.addEventListener('click', handleTryClick)
btnTry.addEventListener('keydown', handleTryClick)
btnReset.addEventListener('click', handleResetClick)











/**
 * Minha versao
 
const screen1  = document.querySelector('#screen1')
const screen2  = document.querySelector('#screen2')
const botao1   = document.querySelector('form button')
const guessNum = document.querySelector('form input')
const h2       = document.querySelector('h2')
const botao2   = document.querySelectorAll('div button')[1]

let numero = Number(Math.floor(Math.random() * 11));
let tentativas = 0;

botao1.addEventListener('click', () => {
    if (!(guessNum.value >=0 && guessNum.value <= 10)) {
        alert('Apenas números positivos inteiros.')
    } else {
        tentativas++    
        if (Number(guessNum.value) !== Number(numero)) {
            event.preventDefault();
            alert(`Tente de novo!!\n\nNumero escolhido: ${guessNum.value}\nNumero certo: ${numero}\nTentativas: ${tentativas}`)
        } else {
            event.preventDefault();
            h2.textContent=`Acertou em ${tentativas} tentativas!`
            screen1.classList.toggle('hideScreen')
            screen2.classList.toggle('hideScreen')
        }
    }
})

botao2.addEventListener('click', () => {
    numero = Number(Math.floor(Math.random() * 11));
    tentativas = 0;
    guessNum.value = undefined
    screen1.classList.toggle('hideScreen')
    screen2.classList.toggle('hideScreen')
})

*/