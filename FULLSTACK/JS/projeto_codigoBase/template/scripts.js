// /* Navegando o título da página */
// const titulo = document.title
// console.log(titulo)

// /* Navegando pelo Id de um elemento */
// const convidado = document.getElementById("guest-2")
// console.log(convidado)

// /* Mostrando as propriedades do obj 'convidado' */
// console.dir(convidado)

// /* Navegando pela classe de um elemento */
// classe = document.getElementsByClassName('guest')
// console.log(classe)

// /* Acessando cada elemento da classe "guest" */
// classe = document.getElementsByClassName('guest');

// console.log(classe[0]);             // maneira 1
// console.log(classe.item(1));        // maneira 2

// // quando não existe o elemento no índice sendo acessado
// console.log(classe[2]);              // undefined
// console.log(classe.item(2));         // null

// /* Navegando pela tag */
// tags = document.getElementsByTagName('li');
// console.log(tags);
// console.log(tags.item(0));
// console.log(tags[1]);


// var queryUm = document.querySelector('.guest');        // retorna o 1º elem da classe 'guest' encontrado
// var queryDois = document.querySelectorAll('.guest');   // retorna todos os elem da classe 'guest' encontrados
// var queryTres = document.querySelector('#guest-1');    // retorna o elemento de Id 'guest-1'
// var queryQuatro = document.querySelector('span');      // retorna o 1º elem da classe 'span' encontrado
// var queryCinco = document.querySelectorAll('span');    // retorna todos os elem da classe 'span' encontrados

// console.log('queryUm');
// console.log(queryUm);

// console.log('queryDois');
// console.log(queryDois);

// console.log('queryTres');
// console.log(queryTres);

// console.log('queryQuatro');
// console.log(queryQuatro);

// console.log('queryCinco');
// console.log(queryCinco);


// var uma_query = document.querySelector('#guest-1 span')

// console.log(uma_query.textContent)    // retorna o conteúdo de texto
// uma_query.textContent = "Ola amigo"   // atribuindo um novo texto
// console.log(uma_query.textContent)    // retornando o novo texto


// console.log(uma_query.textContent)
// console.log(uma_query.innerText)
// console.log(uma_query.innerHTML)

// var uma_query = document.querySelector('#guest-1')

// uma_query.textContent = "outro texto"
// console.log(uma_query.textContent)

// uma_query.innerText = "mais um texto"
// console.log(uma_query.innerText)

// uma_query.innerHTML = '<span>Rodrigo</span><span class="elemento-oculto">999 baboons</span>'
// console.log(uma_query.innerHTML)

// const input = document.querySelector("#name");

// input.classList.add("input-error");        // Adiciona estilo CSS à classe.
// input.classList.remove("input-error");     // Remove estilo CSS à classe.
// input.classList.toggle("input-error");     // Se tem, tira. Se não tem, coloca.

// const botao = document.querySelector('#btn');     // Acessando o botão.
// botao.style.backgroundColor = 'red';

// const convidados = document.querySelector('ul');

// console.log(convidados);

// const novoConvidado = document.createElement('li');
// const nomeConvidado = document.createElement('span');
// nomeConvidado.textContent = 'Ricardo';
// console.log(nomeConvidado.textContent);

// novoConvidado.append(nomeConvidado);
// convidados.append(novoConvidado);
// console.log(convidados);



// const listaConvidados = document.querySelector('ul');   // busca a lista ul

// console.log(listaConvidados);


// const novoItem = document.createElement('li');          // cria um elem li
// const novoConvidado = document.createElement('span');   // cria um elem span

// novoConvidado.textContent = 'Ricardo';                  // seta o texto no span

// novoItem.append(novoConvidado);                         // coloca span dentro de li
// listaConvidados.append(novoItem);                       // coloca li dentro de ul

// novoItem.classList = 'guest';                           // seta a classe de li 

// console.log(listaConvidados);

// window.addEventListener('load', () => {
//     console.log('pagina carregada')
// })






// window.addEventListener('click', (evento) => {
    
//     // previne o comportamento original de um elemento (como recarregamento de pag ao clicar em botao)
//     evento.preventDefault()

//     // retorna todas as infos do evento
//     console.log(evento)

//     // retorna o elemento clicado no evento
//     console.log(evento.target)
// })


window.addEventListener('click', escutar);

function escutar (evento) {
    // previne o comportamento original de um elemento (como recarregamento de pag ao clicar em botao)
    evento.preventDefault();

    // retorna todas as infos do evento
    console.log(evento);

    // retorna o elemento clicado no evento
    console.log(evento.target);

    // retorna o texto do elemento clicado no evento
    console.log(evento.target.textContent);

};



