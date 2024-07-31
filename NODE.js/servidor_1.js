// servidor simples


import http from 'node:http';          // "type": "module"

// criando servidor com uma mensagem de resposta
const servidor = http.createServer((request, response) => {
    return response.end("Oi man!")
});

// ouvindo a porta 3333 até o servidor for derrubado
servidor.listen(3333);         // acessar com localhost:3333 na web

