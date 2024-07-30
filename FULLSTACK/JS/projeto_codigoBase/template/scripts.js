/* Navegando o título da página */
const titulo = document.title
console.log(titulo)

/* Navegando pelo Id de um elemento */
const convidado = document.getElementById("guest-2")
console.log(convidado)

/* Mostrando as propriedades do obj 'convidado' */
console.dir(convidado)

/* Navegando pela classe de um elemento */
classe = document.getElementsByClassName('guest')
console.log(classe)

/* Acessando cada elemento da classe "guest" */
classe = document.getElementsByClassName('guest');

console.log(classe[0]);             // maneira 1
console.log(classe.item(1));        // maneira 2

// quando não existe o elemento no índice sendo acessado
console.log(classe[2]);              // undefined
console.log(classe.item(2));         // null

/* Navegando pela tag */
tags = document.getElementsByTagName('li');
console.log(tags);
console.log(tags.item(0));
console.log(tags[1]);
