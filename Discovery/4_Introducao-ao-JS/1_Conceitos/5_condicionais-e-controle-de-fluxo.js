// 1. IF
//ex 1
let temp = 30

if (temp >= 10 && temp < 20) {
  console.log("médio")
} else if (temp < 10) {
  console.log("frio")
} else {
  console.log("quente")
}


//ex 2
temp = 30
let binario1 = temp >= 10 && temp < 20
let binario2 = temp < 10

if (binario1) {
  console.log("médio")
} else if (binario2) {
  console.log("frio")
} else {
  console.log("quente")
}


// 2. SWITCH    
// ex 1: retorna 8
let var1 = 2
let var2 = 6
let oper = "+"
switch (oper) {
    case "+":
        console.log(`soma: ${var1 + var2}`)
        break;
    case "-":
        console.log(`subtração: ${var1 - var2}`)
    default:
        console.log('Não implementado')
        break;
}


// ex 2:  acima do peso: 30.468749999999993

let massa_kg = 78
let altura_m = 1.60
let imc = massa_kg / (altura_m**2)

switch (true) {
    case (imc <= 18.5):
        console.log(`muito magro: ${imc}`)
        break;
        case (imc > 18.5 && imc <= 29.9):
            console.log(`normal: ${imc}`)
            break;
    default:
        console.log(`acima do peso: ${imc}`)
}


// 3. throw, try...catch
// ex 1
let variavel = "Paulo"

try {
    console.log(variavel.toFixed(2))
} catch (e) {
    console.log(e)
    // throw 'não é número'
}

console.log("Essa linha não será executada porque o erro foi lançado em throw.");


// ex 2
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log(name)
}

try {
    sayMyName()
} catch (error) {
    console.log(error)
}

console.log('Aqui há execução pq throw está dentro do escopo da função')



// loop FOR
// ex 1
for(let i = 0; i < 10; i++) {
	console.log(i)
}

// ex 2
for(let i = 9; i >= 0; i--) {
	console.log(i)
}

// ex 3
for(let i = 0; i < 10; i++) {
	if (i === 4) {
    break
  }
  console.log(i)
}

// ex 4
for(let i = 0; i < 10; i++) {
	if (i >= 4 && i <= 7) {
    continue
  }
  console.log(i)
}


// loop WHILE
// ex 1
var i = 0
while (i < 10) {
  console.log(i)
  i++
}

// ex 2
let numero = 8542235489
var iteracao = 1
while (numero > 10) {
  console.log(`iteracao ${iteracao}: ${numero}`)
  numero = numero/35
  iteracao++ 
}

// loop FOR/OF

//ex 1 -> imprime cada letra da string
let nome = "Joao"
for (const elemento of nome) {
  console.log(elemento)
}

// ex 2 -> imprime cada elemento do array
let nomes = ["Ana", "Beto", "claudio"]
for (const elemento of nomes) {
  console.log(elemento)  
}


// for/in

// ex 1 -> retornando cada chave e seu valor de um obj
const pessoa = {
  nome: 'João',
  idade: 30,
  profissão: 'Desenvolvedor'
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// ex 2 -> numa lista de objs, usar forof para percorrer a lista e forin para percorrer os obj
const pessoas = [
  { nome:"Ana", idade:40, profissao:"Dentista" },
  { nome:"Beto", idade:35, profissao:"Médico" },
  { nome:"Carlos", idade:30, profissao:"Professor" }
]

for (const objeto of pessoas) {
  for (const chave in objeto) {
    console.log(`propriedade: ${chave}  ... valor: ${objeto[chave]}`)
  }
}

