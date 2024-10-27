// criando array com construtor
let marcas = ['apple', 'samsung', 'xiaomi']
console.log('array: '+ marcas)



// adicionando elementos no array
marcas.push('huawei')                    // adc ao final
console.log('push: ' + marcas)
marcas.unshift('asus')                  // adc no comeco
console.log('unshift: ' + marcas)



// removendo elementos do array
marcas.pop()                       // remove do final
console.log('pop: ' + marcas)
marcas.shift()                      // remove do comeco
console.log('shift: ' + marcas)



// removendo elementos pelo indice (splice)
let remover = 'samsung'
let posicao = marcas.indexOf(remover)
marcas.splice(posicao, 1)
console.log('splice: ' + marcas)



// comprimento do array
lengthArray = marcas.length
console.log('length: ' + lengthArray)



// acessando elementos
let frutas = ['banana', 'pera', 'uva', 'maca']
console.log('acessando array 1: ' + frutas[0])
console.log('acessando array 2: ' + frutas[frutas.length - 1])
console.log('acessando array 3: ' + frutas[frutas.length])         // fora do limite retorna undefined



// convertendo string pra array 
let uma_string = 'banana,pera,uva,maca'
let um_array = uma_string.split(',')
console.log('split: ' + um_array)



// posicoes de elementos no array
console.log('indexOf: ' + frutas.indexOf('banana'))
console.log('lastIndexOf: ' + frutas.lastIndexOf('banana'))



// elementos que arrays aceitam (todos)
let listao = [
    'Joao',
    'Maria',
    55,
    true,
    ['a', 'b', 'c'],
    { nome: 'Joao', sobrenome: 'Silva' },
    function() { console.log('ola') },
    new Date(),
    Infinity,
    NaN,
    null, 
    undefined
]

console.log(listao)
console.log(listao[5].sobrenome)
listao[6]()
console.log(listao[7])


