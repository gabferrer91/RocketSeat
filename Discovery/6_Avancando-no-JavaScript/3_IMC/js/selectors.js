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
    },
    fecha(){
        chaves.moda.classList.add('hide')
    }
}

export {chaves}