import { controls } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import { updateDisplay } from './timer.js';
import { bgAudio } from "./sounds.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()

    })

}

export function setMinutes () {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent=""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', () => {
        let time = el.minutes.textContent
        time > 60 ? 60 : time

        state.minutes = time
        // state.seconds = 0
        updateDisplay()
    })


    el.seconds.addEventListener('focus', ()=>{
        el.seconds.textContent=""
    })

    el.seconds.onkeypress = (event) => /\d/.test(event.key)
    el.seconds.addEventListener('blur', () => {
        let timeSec = el.seconds.textContent
        timeSec > 60 ? 60 : timeSec

        state.seconds = timeSec
        updateDisplay()
    })
}



/**
 NOTAS

.addEventListener('focus',callback()):
'focus' é um evento de focar no elemento da DOM.

.addEventListener('blur',callback()):
'blur' é o inverso de 'focus', significa desfocar do elemento da DOM.
Aqui é usado para quando setar um minuto maior que 60, ao desfocar ele ir pra 60.


 O trecho abaixo (A):
        el.minutes.addEventListener('keypress', (e)=>{
                if (!/\d/.test(e.key)) {
                    e.preventDefault()
                } 
            })

É o mesmo que (B):
        el.minutes.onkeypress = (event) => /\d/.test(event.key)

Ambos validam com o método ".test" se o regexp "/\d/" para dígitos é true ou false.
Em A ele valida se NÃO for dígito (uso de !) e em B ele valida se é dígito.


O termo "/\d/.test(event.key)" significa:
  /\d/       -->>  regexp que busca números (digits)
  .test()    -->>  método específico de regexp, checa se a string (event.key) atende a um padrão definido pelo regexp (/\d/)

Ex.:
const regex = /\d/; // Expressão regular que procura por dígitos
const string1 = "abc123";
const string2 = "abc";

console.log(regex.test(string1)); // true (encontrou dígitos)
console.log(regex.test(string2)); // false (não encontrou dígitos)
*/