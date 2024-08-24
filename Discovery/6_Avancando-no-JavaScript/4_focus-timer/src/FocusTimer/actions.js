import state from './state.js'
import * as timer from './timer.js';
import * as el from './elements.js'
import * as sounds from './sounds.js'

/*fn para botao de play e pause*/
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.btnPressAudio.play()
}

/*fn para o botão de stop (reseta o tempo e para o timer)*/
export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    sounds.btnPressAudio.play()
}

/*fn para o botao do relogio pra setar o tempo*/
export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.seconds.setAttribute('contenteditable', true)
    el.minutes.focus()
    el.seconds.focus()
    sounds.btnPressAudio.play()
}

/*fn para o botao de ligar e desligar o audio*/
export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()
    } else {
        sounds.bgAudio.pause()
        sounds.bgAudio.currentTime = 0;
    }
}



/*
NOTAS

".setAttribute('contenteditable', true)" adiciona um atributo. A string é o atributo e ele existe em JS. Serve pra editar o conteúdo na pág web.
*/