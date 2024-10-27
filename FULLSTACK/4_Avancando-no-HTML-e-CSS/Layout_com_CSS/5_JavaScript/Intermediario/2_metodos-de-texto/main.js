let message = 'Estou estudando os fundamentos do JavaScript!';

console.log(message);



console.log(message.toUpperCase());          // converte para maiusculo
console.log(message.toLowerCase());          // converte para minusculo




console.log(message.includes('JavaScript')); // verifica se existe o texto dentro da string
console.log(message.length)                  // verifica o tamanho da string

let senha1 = 123;
let senha2 = 12345678;

senha1.toString().length < 6 ? console.log('A senha1 deve conter pelo menos 6 digitos') : console.log('senha1 ok')
String(senha2).length < 6 ? console.log('A senha2 deve conter pelo menos 6 digitos') : console.log('senha2 ok')



// substitui o texto
message = message.replace('JavaScript', 'Python')
console.log('replace: ' + message)



// remover espacos em branco
message = '     Estou estudando os fundamentos do JavaScript!     ';
message = message.trim()
console.log('trim: ' + message)



//extrair um pedaço da string
message = 'Estou estudando os fundamentos do JavaScript!'.substring(5, 15)
console.log('substring: ' + message)
message = 'Estou estudando os fundamentos do JavaScript!'.slice(5, 15)
console.log('slice: ' + message)
message = 'Estou estudando os fundamentos do JavaScript!'.slice(-15, -5)
console.log('slice backwards: ' + message)



// split: cria um array de palavras
message = 'Estou estudando os fundamentos do JavaScript!'.split(' ')  
console.log('split: ' + message)    


// join: cria um array de palavras e junta as palavras
message = 'Estou estudando os fundamentos do JavaScript!'.split(' ').join('-')
console.log('join: ' + message)



//completando uma string 
message = 'Estou estudando!'.padEnd(30, '---')      // final
console.log('padEnd: ' + message)
message = 'Estou estudando!'.padStart(30, '---')    // início
console.log('padStart: ' + message)

let cartao = '1234567890123456'
let cartaoEnd = cartao.slice(-4)  // pega os 4 últimos (3456)
console.log(cartaoEnd)            
let cartaoParsed = cartaoEnd.padStart(cartao.length, '*')   // completa com * para completar o cartão
console.log(cartaoParsed)



// encontrando a posicao de um texto
message = 'Estou estudando os fundamentos do JavaScript!'.indexOf('fundamentos')
console.log('indexOf: ' + message)
message = 'Estou estudando os fundamentos do JavaScript!'.indexOf('quando nao encontra retorna "-1"')
console.log('indexOf no return: ' + message)
message = 'Estou estudando os fundamentos do JavaScript!'.lastIndexOf('fundamentos')
console.log('lastIndexOf: ' + message)



