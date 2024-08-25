import { setups } from "../setups.js"
import { minutesDisplay, secondsDisplay } from '../DOMs.js'
import { audioRing } from '../sounds/soundFiles.js'

export function countdown() {
    clearTimeout(setups.timeOutId)
    setups.isCounting=true

    let numMins = Number(minutesDisplay.textContent)
    let numSecs = Number(secondsDisplay.textContent)
    
    numSecs--
    
    if (numMins <= 0 && numSecs < 0) {
        secondsDisplay.textContent = String(setups.startSecs).padStart(2,'0')
        minutesDisplay.textContent = String(setups.startMins).padStart(2,'0')
        audioRing.play()
        return
    }

    if(numSecs < 0) {
        numSecs = 59
        if(numMins > 0) {
            numMins--
        }
    }
 
    secondsDisplay.textContent = String(numSecs).padStart(2,'0')
    minutesDisplay.textContent = String(numMins).padStart(2,'0')

    console.log('rodando')
    setups.timeOutId = setTimeout(countdown, 500)
}

      