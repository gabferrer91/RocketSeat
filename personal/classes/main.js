import {fnAsync} from './async.js'
// 40967


console.log("antes da fn async")


const promessa = fnAsync.fnAsyncPegaDados()
console.log('promessa: ', promessa)

console.log("depois da fn async")

/*
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
*/