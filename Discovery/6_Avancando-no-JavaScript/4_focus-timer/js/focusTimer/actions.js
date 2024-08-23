export {togglePlay, timer, stop, toggleSound}

import states from './state.js'


function togglePlay(){
    states.isRunning = document.documentElement.classList.toggle('running')
}

function timer(){
    console.log('timer')
}

function stop(){
    states.isRunning = false
    states.minutes = 0
    states.seconds = 0
    states.isRunning = document.documentElement.classList.remove('running')
    
}

function toggleSound(){
    states.isMute = document.documentElement.classList.toggle('sound')
    // console.log(states.isMute)
}


