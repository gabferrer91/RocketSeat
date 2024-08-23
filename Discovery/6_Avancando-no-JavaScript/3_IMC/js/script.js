import { chaves } from "./selectors.js";

function imc(kg, m) {
    let val = (kg / (m**2)).toFixed(2)
    return val
}

chaves.clos.addEventListener('click', (e) => {
    chaves.abreFecha()
})

chaves.send.addEventListener('click', (e) => {
    let result = imc(chaves.mass.value, chaves.size.value)

    if (isNaN(result) || result === 'Infinity' || chaves.mass.value === '' || chaves.size.value === '') {
        chaves.erro.classList.add('open')
    } else {
        chaves.erro.classList.remove('open')
        chaves.abreFecha()
        chaves.mesg.textContent = chaves.mesg.textContent.replace('XXX', `${result}`)
    }
})


window.addEventListener('keydown', handleKeyDown)

function handleKeyDown (event) {
    console.log(event.key)     // apertar esc e validar qual a tring dele (é 'Escape')
    if (event.key === 'Escape') {
        chaves.fecha()
    }
}

chaves.mass.addEventListener('input', (event)=>{
    chaves.erro.classList.remove('open')
})

chaves.size.addEventListener('input', (event)=>{
    chaves.erro.classList.remove('open')
})