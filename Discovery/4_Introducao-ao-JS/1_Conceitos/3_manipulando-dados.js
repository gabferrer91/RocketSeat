// 1. prototype
const array = [1, 2, 3];
const proto = Object.getPrototypeOf(array);
console.log(Object.getOwnPropertyNames(proto));
/* ou no console do navegador -> [1,2,3].__proto__ */


// 2. type conversion e type coersion
let numero = 123
let letras = "123"
console.log(typeof Number(letras))   // 'letras' agora são number
console.log(typeof String(numero))   // 'numero' agora é string


// contando caracteres e dígitos
let ex1 = "Paulinho"
console.log(ex1.length)            // 8

let ex2 = 12345678
console.log(String(ex2).length)    // como nao existe o método length para number, converter em string antes

// arredondando casas decimais
let ex3 = 123.13843548
console.log(ex3.toFixed(2))          // 123.14

console.log(ex3.toFixed(2).replace(".",","))          // replace acaba convertendo para string

// separando o texto por espacos
let ex4 = "Como é bom ser nerd!"
console.log(ex4.split(" "))             // [ 'Como', 'é', 'bom', 'ser', 'nerd!' ]

// unindo elementos de um array com underline
let ex5 = [ 'Como', 'é', 'bom', 'ser', 'nerd!' ]
console.log(ex5.join("_"))               // Como_é_bom_ser_nerd!

// verificar se o texto contém uma palavra
let ex6 = "Eu vivo como desejo."
console.log(ex6.includes('almejo'))     // false
console.log(ex6.includes('Desejo'))     // false
console.log(ex6.includes('desejo'))     // true
console.log(ex6.toUpperCase().includes('Desejo'.toUpperCase()))     // true

// criar array com construtor
let ex7 = new Array(1, 2, 3, 4)
console.log(ex7)                           // [ 1, 2, 3, 4 ]

// contar elementos de um array
let ex8 = ['a', 'b', 'c']
console.log(ex8.length)        // 3
let ex9 = [1, 2, [3, 4], {valor: 5}, function () {return 6}]
console.log(ex9[0])               // 1
console.log(ex9[2][1])            // 4
console.log(ex9[3].valor)         // 5
console.log(ex9[4]())             // 6

// cadeia de caracteres em elementos de um array
let ex10 = 'papito'
console.log(Array.from(ex10))     // [ 'p', 'a', 'p', 'i', 't', 'o' ]

// adicionando elemento no final do array
let ex11 = ['html', 'css', 'js']
ex11.push('nodejs')               // [ 'html', 'css', 'js', 'nodejs' ]


// remove 1º elemento
ex11.shift()
console.log(ex11)   // [ 'css', 'js', 'nodejs' ]

// adc no início
ex11.unshift('sql')
console.log(ex11)   // [ 'sql', 'css', 'js', 'nodejs' ]

// remover do fim
ex11.pop()
console.log(ex11)   // [ 'sql', 'css', 'js' ]

// remover do início
ex11.shift()
console.log(ex11)   // [ 'css', 'js' ]

// pegar alguns elementos
let techs = ['sql', 'html', 'css', 'js', 'nodejs']
console.log(techs.slice(1, 4))                      // [ 'html', 'css', 'js' ]     slice(início inclusivo, fim exclusivo)

// remover um ou mais elementos
techs = ['sql', 'html', 'css', 'js', 'nodejs']
techs.splice(2,4)
console.log(techs)     // [ 'sql', 'html' ]       splice(início incluso, fim incluso)

// encontrar a posicao index
techs = ['sql', 'html', 'css', 'js', 'nodejs']
let indice = techs.indexOf('css')
console.log(indice)                     // 2
console.log(techs[indice])              // css

