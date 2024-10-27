// while -> executa enquanto uma condicao for verdadeira
let i = 0
while (i < 10) {
    console.log('while: '+ i)
    i++
}


let booleano = true
let iter = 1
while (booleano) {
    let resposta = window.prompt('Deseja continuar? (s/n)')
    if(resposta === 'n') {
        booleano = false
    }
    console.log('while booleano: iter ' + iter)
    iter++
}










// do while -> executa pelo menos uma vez e depois verifica a condicao
let j = 0
do {
    console.log('do while: ' + j)
    j++
} while (j < 10)











// for -> executa uma quantidade definida de vezes
for (let k = 0; k < 10; k++) {
    console.log('for: ' + k)
}






// for in -> percorre os indices de um objeto
const person = {
    name: 'John',
    surname: 'Doe',
    country: 'USA',
    age: 30
}

for (let i in person) {
    console.log('for in: ' + i + '\n' + person[i])
}

let nomes = ['Ana', 'Beto', 'Claudio', 'Danilo']     // array é melhor com for of
for (let nome in nomes) {
    console.log('for in: ' + nome + '\n' + nomes[nome])
}





// for of -> percorre os valores de um array
nomes = ['Ana', 'Beto', 'Claudio', 'Danilo']
for (let nome of nomes) {
    console.log('for of: ' + nome)
}




// palavra reservada break -> interrompe o loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break                // para no 5
    }
    console.log('for break: ' + i)
}



// palavra reservada continue -> pula o loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue        // pula o 5, indo do 4 pro 6
    }
    console.log('for continue: ' + i)
}


