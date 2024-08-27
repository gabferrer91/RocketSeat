const titulo = document.querySelector('h1')
console.log(titulo)


class objeto {
    constructor () {
        this.buscandoElementoDois = function (tag) {
            return document.querySelector(tag)
        }
    }

    buscandoElementoUm(tag){
        return document.querySelector(tag)
    }
}

const umaTag = new objeto()

console.log(umaTag.buscandoElementoUm('h1'))
console.log(umaTag.buscandoElementoDois('p'))




const btnSend = document.querySelector('#send')

btnSend.addEventListener('click', (event)=>{
    event.preventDefault()
})