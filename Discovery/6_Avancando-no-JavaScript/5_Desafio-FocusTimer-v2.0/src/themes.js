import {dark,light,pageBody,playBtn,stopBtn,incrBtn,decrBtn,arroBtn} from './DOMs.js'

export function toggleMode() {
    dark.addEventListener('click', (e) => {
        pageBody.classList.toggle('dark')
        dark.classList.add('toggleHidden')
        light.classList.remove('toggleHidden')
        playBtn.classList.toggle('brightnessAdjust')
        stopBtn.classList.toggle('brightnessAdjust')
        incrBtn.classList.toggle('brightnessAdjust')
        decrBtn.classList.toggle('brightnessAdjust')
        arroBtn.classList.toggle('brightnessAdjust')
    });
    
    light.addEventListener('click', (e) => {
        pageBody.classList.remove('dark')
        dark.classList.remove('toggleHidden')
        light.classList.add('toggleHidden')
        playBtn.classList.toggle('brightnessAdjust')
        stopBtn.classList.toggle('brightnessAdjust')
        incrBtn.classList.toggle('brightnessAdjust')
        decrBtn.classList.toggle('brightnessAdjust')
        arroBtn.classList.toggle('brightnessAdjust')
    })
}


