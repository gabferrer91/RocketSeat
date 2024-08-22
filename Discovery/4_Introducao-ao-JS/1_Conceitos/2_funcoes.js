// 1. function statement
function createPhrases () {
    console.log("Estudar é muito bom.")
    console.log("Paciência e persistência.")
    console.log("Revisão é a mãe do aprendizado.")
};

createPhrases();      // chamando a funcao

// 2. funções anônimas ou functions expressions
const soma = function (number1, number2) {
    console.log(number1 + number2)
};

soma(2,3);

// 3. Return
const multi = function (number1, number2) {
    let resultado = number1 * number2                // Sempre defina let ou const. Não atribuir nada pode gerar a variavel no escopo global.
    return resultado
}

let retorno = multi(2,3)
console.log(retorno)

// Cuidado com os escopos das funções
// sobrescreve 'exemplo1', tudo vira 'study'
let exemplo1 = 'estudar'
function verbo1 () {
    exemplo1 = 'study'; 
    return exemplo1;
}
console.log(verbo1()); 
console.log(exemplo1);

// não sobrescreve 'exemplo2', retorna 'estudar' e 'study' 
// pq cria duas vars exemplo2, uma dentro e outra fora do escopo da funcao
// pelo fato de ter um param da funcao que tem msm nome mas de uma var global mas nao é ela.
let exemplo2 = 'estudar'
function verbo2 (exemplo2) {
    exemplo2 = 'study'; 
    return exemplo2;
}
console.log(verbo2(exemplo2)); 
console.log(exemplo2);



// 4. hoisting de funcoes
// Funciona. Sofre hoising por ser uma function expression.
meuNome()
function meuNome () {
    console.log('Joao')
}

// Não funciona mesmo com var (que sofre hoisting). Isso pq o içamento é sobre a var seuNome, que será undefined.
// seuNome()                   // dá erro
console.log(seuNome)           // undefined
var seuNome = function () {
    console.log('Maria')
}
seuNome()                      // aí retorna 'Maria'



// 5. callback function
function funcaoMaior (fnArg) {
    console.log('Antes de uma callback')
    fnArg()
    console.log('Depois de uma callback')
}

function funcaoMenor () {
    console.log('Estou em uma callback')
}

// const funcaoMenor = () => {
//     console.log('Estou em uma callback')
// }

funcaoMaior(funcaoMenor)


// 6. Funções construtoras
function Pessoa (nome, idade) {
    this.name = nome                    // cria a propriedade 'name'
    this.age = idade                    // cria a propriedade 'age'
}

let pessoa1 = new Pessoa("Joao", 30)
console.log(pessoa1)                           // Pessoa { name: 'Joao', age: 30 }
console.log(pessoa1.age)                       // 30
console.log(pessoa1.name)                      // Joao

