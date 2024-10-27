import {trialsElement} from './DOMs.js';


export const updateTrials = () => {
    let trials = trialsElement.innerText
    trials = Number(String(trials).split('º')[0])
    trialsElement.innerText = String(trials + 1) + 'º RESULTADO'
}


