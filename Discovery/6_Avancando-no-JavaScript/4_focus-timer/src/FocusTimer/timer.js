import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import * as sounds from './sounds.js'

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
    
}

export function countdown () {
    clearTimeout(state.countdownTimeOutId)

    if(state.isRunning === false) {
        return
    } else {
        
        let mins = Number(el.minutes.textContent)
        let secs = Number(el.seconds.textContent)

        secs--

        if (secs < 0) {
            secs = 59
            mins--
        }

        if (mins < 0) {
            reset()
            sounds.kitchenTimer.play()
            mins = state.minutes
            secs = state.seconds
            updateDisplay(mins,secs)
            return
        }

        updateDisplay(mins,secs)
        console.log(mins, secs)
        state.countdownTimeOutId = setTimeout(() => countdown(), 1000)     /*funcao recursiva, countdown chama ela msm de 1 em 1 seg e só para quando state.isRunning for falso (clicar no botao de parar)*/
    }
}

/*
NOTAS


setTimeout(fn, time) -> executa uma funcao fn depois de um tempo time (ms).
setTimeout e outras funcoes como setInterval, quando criadas, geram um Id.

Recursão é uma fn que chama ela mesma dentro dela. Como countdown que chama ela mesma dentro do setTimeout.

O timeOut está dentro de uma funcao recursiva. Em termos, countdown é chamada e ao final cria um timeOut para 
a própria funcao countdown. Countdown tem um bloco IF para quando estiver correndo o tempo que é acionado
a todo click do botão do play (pq da toggle na classe). Com isso vários timeOuts são criados.
Solução: 
Em state.js fazer um atributo pra pegar o Id timeOut e no início da função countdown resetar ele.

*/
