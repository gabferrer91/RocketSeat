// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
const corpo = document.querySelector('body');

corpo.addEventListener('click',()=>{
    const mensagem = alert('Hello World!')
})



// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const soma = (a, b) => console.log(a+b)
soma(2,3)



// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. 
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const variavelIF = (numero) => {
    if (typeof numero === 'number') {
        console.log(`${numero} é um número.`)
    } else {console.log(`${numero} não é um número.`)}
}

variavelIF(12) ; variavelIF('Vitor')



// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const variavelSWITCH = (texto) => {
    switch (typeof texto) {
        case 'string':
            console.log(`${texto} é um texto.`)
            console.log(typeof texto)
            break
        default:
            console.log(`${texto} não é um texto.`)
            console.log(typeof texto)
            break
    }
}

variavelSWITCH(12) ; variavelSWITCH('Vitor')



// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const variavelIFbool = (bool) => {
    if (typeof bool === 'boolean') {
        console.log(`${bool} é booleano.`)
    } else {console.log(`${bool} não é um booleano.`)}
}

variavelIFbool(true) ; variavelIFbool('true')



//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function subtracao (a,b) {
    return a-b
}
console.log(`subtracao: ${subtracao(6,2)}`)



//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function multi (a,b) {
    return a*b
}
console.log(`multi: ${multi(6,2)}`)



//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function divisao (a,b) {
    return a/b
}
console.log(`divisao: ${divisao(6,2)}`)



//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const sePar = (variavel) => {
    if(variavel % 2 > 0) {
        console.log(`${variavel} não é par.`)
    } else { console.log(`${variavel} é par.`) }
}
sePar(1); sePar(2); sePar(3); sePar(4); 



//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
//Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const seImpar = (variavel) => {
    if(variavel % 2 != 0) {
        console.log(`${variavel} é ímpar.`)
    } else { console.log(`${variavel} não é ímpar.`) }
}
seImpar(1); seImpar(2); seImpar(3); seImpar(4); 

