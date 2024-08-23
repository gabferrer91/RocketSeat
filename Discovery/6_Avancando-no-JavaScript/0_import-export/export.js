// exemplo 1 -- default
// export default function Amigo () {
//     return 'Olá, meu amigo.'
// }


// exemplo 2 -- nomeado
// export const pessoa = {nome:"Joao",idade:50,filhos:["Ana","Beto"]}


// exemplo 3 -- multiplas exportacoes
// let num1 = 120
// let num2 = 230

// export {num1, num2}

// exemplo 4 -- renomeando export
// const imc = (m,h) => {
    // return m/(h**2)
// }

// export {imc as calculoIMC}

// exemplo 5 -- varios exports
// let nome1 = 'Silvio'
// let nome2 = 'Santos'
// export default nome2
// export {nome1 as primeiroNome}

// exemplo 6 -- import de tudo
// let soma = (a,b) => {return a+b}
// let subt = (a,b) => {return a-b}
// let divi = (a,b) => {return a/b}
// let mult = (a,b) => {return a*b}

// export {soma,subt,divi,mult}

// exemplo 7 -- import file
const varA = 8
const varB = 16
const varC = 2
function delta(a,b,c) {
    return (b**2)-(4*a*c)
}

const content = document.querySelector('.conteudo')
content.textContent = delta(varA,varB, varC)