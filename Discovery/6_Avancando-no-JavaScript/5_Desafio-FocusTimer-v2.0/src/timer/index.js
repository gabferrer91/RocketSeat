import { playBtn,stopBtn,incrBtn,decrBtn,minutesDisplay,secondsDisplay,arroBtn } from '../DOMs.js'
import { setups } from '../setups.js'
import { countdown } from './countdown.js'

/* config display nums when page is loaded */
export function beginning () {
    minutesDisplay.textContent = String(setups.startMins).padStart(2,'0')
    secondsDisplay.textContent = String(setups.startSecs).padStart(2,'0')
}


/* increase 5mins */
export function fnTimerIncr () {
    incrBtn.addEventListener('click', (e) => {
        if (setups.isMinute) {
            let moreFiveMins = Number(minutesDisplay.textContent) + 5
            minutesDisplay.textContent = String(moreFiveMins).padStart(2, '0')
        } else {
            let moreFiveSecs = Number(secondsDisplay.textContent) + 5
            moreFiveSecs = moreFiveSecs > 59 ? 59 : moreFiveSecs
            secondsDisplay.textContent = String(moreFiveSecs).padStart(2, '0')
        }
    })
}


/* decrease 5mins */
export function fnTimerDecr () {
    decrBtn.addEventListener('click', (e) => {
        if (setups.isMinute) {
            /* decrease 5mins */
            let lessFiveMins = Number(minutesDisplay.textContent) - 5
            lessFiveMins = lessFiveMins < 0 ? 0 : lessFiveMins
            minutesDisplay.textContent = String(lessFiveMins).padStart(2, '0')
            
            /* adjust secs if mins <=0 */
            let secsAdjust = Number(secondsDisplay.textContent)
            secsAdjust = lessFiveMins <= 0 ? 0 : secsAdjust
            secondsDisplay.textContent = String(secsAdjust).padStart(2, '0')      
        } else {
            /* decrease 5secs */
            let lessFiveSecs = Number(secondsDisplay.textContent) - 5
            lessFiveSecs = lessFiveSecs < 0 ? 0 : lessFiveSecs
            secondsDisplay.textContent = String(lessFiveSecs).padStart(2, '0')
        }
    })
}


/* countdown when 'play' is clicked */
export function fnTimerPlay () {
    playBtn.addEventListener('click', (e) => {
        countdown()
    })
}


/* stops countdown and sets timer to default numbers */
export function fnStop () {
    stopBtn.addEventListener('click', () => {
        setups.isCounting=false
        clearTimeout(setups.timeOutId)
        minutesDisplay.textContent = String(setups.startMins).padStart(2,'0')
        secondsDisplay.textContent = String(setups.startSecs).padStart(2,'0')
    })
}


export function fnSwitch () {
    arroBtn.addEventListener('click', () => {
        setups.isMinute = !setups.isMinute
        console.log(setups.isMinute)
    })
}


/**
 Funcionalidades esperadas dos botões:
    Play   : aciona o timer;
    Stop   : para o timer;
    +      : aumenta em mais 5 minutos o tempo do timer;
    -      : diminui em 5 minutos o tempo do timer.
 */
