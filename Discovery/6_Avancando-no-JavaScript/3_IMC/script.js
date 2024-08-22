let chaves = {
    mass:document.querySelectorAll('.inputWrapper input')[0],
    size:document.querySelectorAll('.inputWrapper input')[1],    
    send:document.querySelector('.calculate'),
    moda:document.querySelector('.modalWrapper'),
    clos:document.querySelector('.close'),
    mesg:document.querySelector('.modalCard h2'),
    erro:document.querySelector('.alert-error'),
    abreFecha() {
        chaves.moda.classList.toggle('hide')
    }
}

function imc(kg, m) {
    let val = (kg / (m**2)).toFixed(2)
    return val
}

chaves.clos.addEventListener('click', (e) => {
    chaves.abreFecha()
})

chaves.send.addEventListener('click', (e) => {
    let result = imc(chaves.mass.value, chaves.size.value)

    if (result === 'NaN' || result === 'Infinity' || chaves.mass.value === '' || chaves.size.value === '') {
        chaves.erro.classList.add('open')
    } else {
        chaves.erro.classList.remove('open')
        chaves.abreFecha()
        chaves.mesg.textContent = chaves.mesg.textContent.replace('XXX', `${result}`)
    }
})


