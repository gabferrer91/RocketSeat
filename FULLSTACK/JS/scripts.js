///////////////////    parte 1: console.log, variáveis    ///////////////////

/* oi */

console.log('hello world')


// escopo A
{
    var numero = 18
}

console.log(numero)         // retorna mesmo chamando fora do escopo A pq é 'var'

{
    let nome = "Julio"
    console.log(nome)       // ok
}



// string
let texto_1 = "este é um texto"
let texto_2 = 'este é outro texto'
let texto_3 = "este é 'outro' texto"
let texto_4 = 'este é "mais um" texto'
let texto_5 = `este é um outro texto
que se quebra em linha
`

console.log(texto_1)
console.log(texto_2)
console.log(texto_3)
console.log(texto_4)
console.log(texto_5)

let name = "Vitor"
let surname = "Paiva"
let email = "vitor.paiva@gmail.com"

console.log('Olá, ' + name + ' ' + surname + '!' + '\n' + 'Você logou com o email "' + email + '".')
console.log('Olá,', name, surname, '!', '\n', 'Você logou com o email "', email, '".')

console.log(`
Olá, ${name} ${surname}!
Você logou com o email ${email}.
`)

let numero_2 = 1.20
console.log(` O tipo de numero_2 é ${typeof numero_2} \n e seu valor é ${numero_2}.`)

console.log(4 / "dois")   // NaN

let vazio_um
console.log(vazio_um)

let vazio_dois = null
console.log(vazio_dois)

// texto para numero
let variavelUm = "2"
console.log(typeof Number(variavelUm))

// numero para texto
let variavelDois = 2
console.log(typeof variavelDois.toString())
console.log(typeof String(variavelDois))

// para boolean
let variavelTres = 10
console.log(Boolean(variavelTres))   // false só zero





///////////////////    parte 2: expressoes e operadores    ///////////////////

console.log(`SOMA: ${2 + 3}`)                       // 5
console.log(`CONCATENAÇÃO: ${"2" + "3"}`)           // 23
console.log(`SUBTRAÇÃO: ${2 - 3}`)                  // -1
console.log(`MULTIPLICAÇÃO: ${2 * 3}`)              // 6
console.log(`DIVISÃO: ${4 / 3}`)                    // 1.3333333
console.log(`RESTO DA DIVISÃO: ${3 % 2}`)           // 1
console.log(`POTÊNCIA: ${3 ** 2}`)                  // 9


// incremento ou decremento unitário: uso de '++' e '--'
var numero = 10
console.log(`incremento: ${numero++}`)   // ++ depois, incrementa depois (retorna 10 e incrementa 1)
console.log(numero)                      // 11

var numero = 10
console.log(`incremento: ${++numero}`)   // ++ antes, incrementa antes (incrementa 1 e retorna 11)



// incremento ou decremento maior que 1: uso de '+=' e '-='
var numero = 5
console.log(`incremento de 10: ${numero+=10}`)


var one = 1
var two = 2

console.log(one == two)    // false
console.log(one == 1)      // true
console.log(one == "1")    // true   compara o conteúdo (não o tipo)
console.log(one == "2")    // false
console.log(one === 1)     // true   compara valor e tipo
console.log(one === "1")   // false  compara valor e tipo
console.log(one > two)     // false
console.log(one != two)    // true

var nome = true
var senha = false

console.log(nome && senha)       // nome é true e senha é false? R: false
console.log(nome || senha)       // nome é true ou senha é false? R: true
console.log(!nome)               // inverso de nome (true). R: false


var idade = 16

dirigir = 
    idade >= 18 ? 
    "pode dirigir" : 
    "não pode dirigir"

console.log(dirigir)


console.log(false     ? "VERDADEIRO" : "FALSO")      // FALSO
console.log(0         ? "VERDADEIRO" : "FALSO")      // FALSO
console.log(-0        ? "VERDADEIRO" : "FALSO")      // FALSO
console.log(""        ? "VERDADEIRO" : "FALSO")      // FALSO
console.log(null      ? "VERDADEIRO" : "FALSO")      // FALSO
console.log(undefined ? "VERDADEIRO" : "FALSO")      // FALSO
console.log(NaN       ? "VERDADEIRO" : "FALSO")      // FALSO
 
console.log(true      ? "VERDADEIRO" : "FALSO")      // VERDADEIRO

// nota: objetos, mesmo vazios, são algo e retornam true
console.log({} ? "VERDADEIRO" : "FALSO")             // VERDADEIRO {} é obj
console.log([] ? "VERDADEIRO" : "FALSO")             // VERDADEIRO {} é obj



//////////// parte 3: teste condicional ///////////


var idade = 33

if(idade > 18) {
    console.log('maior de 18')   
} else if (idade = 18) {
    console.log('18 anos')
} else {
    console.log('menor de 18 anos')
}



let digito = 2

switch (digito) {
    case 1:
        console.log('Consultar pedido:')
        break
    case 2:
        console.log('Falar com atendente.')
        break
    case 3:
        console.log('Cancelar pedido.')
        break
    default:
        console.log('Opção inválida.')
}

let minha_idade = 10

try {
    
    let minha_idade = 12
    console.log(`quadrado ${minha_idade**2}`)
} catch (error) {
    // console.log(error, '\n')
    console.log(`var "minha_idade" não é numérica.`)
} finally {
    console.log('fim da execução')
}



let numerador = 10
let denominador = 0

try {
    if (denominador === 0) {
        throw new Error("Não é possível divisão por zero.")
    } else {
        console.log(`divisão: ${numerador / denominador}`)
    }
} catch (error) {
    console.log(error)
}

let full_name = "Thiago"
let password = "thiaguinho"

try {
    if (full_name != "Thiago Hernandez" && password != "thiaguinho") {
        throw new Error("Nome e senha inválidos.")
    } else if (full_name != "Thiago Hernandez") {
        throw new Error("Nome inválido.")
    } else if (password != "thiaguinho") {
        throw new Error("Senha inválida.")
    } else {
        console.log('Informações validadas.')
    }
} catch (error) {
    console.log(error)
}


let pessoa = "Joao"
let local = "RJ"

function saldacao (pessoa) {
    console.log(`Olá, ${pessoa}! Bem vindo ao ${local}!`)
}

saldacao("Vitor")          // retorna Vitor
saldacao("Cláudio")        // retorna Cláudio




let algum_nome = "Beto"

function retorno (primeiro_nome, segundo_nome = "Carreiro") {
    console.log(`Olá, ${primeiro_nome} ${segundo_nome}!`)
}

retorno(algum_nome)

function exemplo (valor) {
    valor **= 2
    return valor
}

let teste = exemplo(3)
console.log(teste)




console.log(`valor: ${x}`)  // undefined
var x = 5
console.log(`valor: ${x}`)  // 5


mensagem('Olá pessoal!')

function mensagem (msg) {
    console.log(msg)
}

mensagem('Tudo bem?')



console.log(quadrado(5))

function quadrado (umNum) {
    umNum = umNum ** 2
    return umNum
}

console.log(quadrado(5))



function funcaoUm (texto) {
    console.log(texto)
    funcaoDois()

    function funcaoDois () {
        console.log("-----")
    }
}

funcaoUm("Olá, amigo!")







let minha_funcao_1 = function () {
    m = 2
    return m
}

console.log(minha_funcao_1())

let minha_funcao_2 = function (nome, sobrenome) {
    return `Olá, ${nome} ${sobrenome}!`
}

console.log(minha_funcao_2("Ana", "Júlia"))


var mais_uma_var = () => {
    return 40
}

console.log(mais_uma_var())   // retorna 40






function primeira_funcao (param1, param2) {
    console.log(param1)

    param2()
}

primeira_funcao('texto', function(){console.log('outro texto')})



function primeira_funcao (param1, param2) {
    console.log(param1)

    param2()
}

primeira_funcao('texto', () => console.log('outro texto'))

