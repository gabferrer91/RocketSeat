// console.log('oi')

// const lista = document.querySelector('ul');

// onsubmit()

// lista.addEventListener("scroll", (evento) => {
//     console.log(evento.)
// })




const formulario = document.querySelector('form')
console.log(formulario)

// formulario.onsubmit = (evento) => {
//     evento.preventDefault()   // evita recarregar pag
//     console.log('você fez um submit no formulario 1')
// }

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('submit no form 1')
})

const digitacao = document.querySelector('input')
console.log(digitacao)

// digitacao.addEventListener('keypress',(retorno) => {
//     console.log(retorno.key)
// })



// digitacao.addEventListener('change', (outro_retorno) => {
//     console.log(outro_retorno.type)
//     console.log('saiu do input')
// })


