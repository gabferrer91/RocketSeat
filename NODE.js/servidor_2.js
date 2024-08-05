// gravando dados no servidor

import http from 'node:http';

const users = [];

const server = http.createServer((request, response) => {
    const {method, url} = request                   // requests devolve os dois objs: 'method' e 'url'. É o msm que fazer const metodo = request.method
    
    if (method === 'GET' && url==='/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })   // Define o status e o header
        return response.end('Rota da página principal.')
    }

    if (method === 'GET' && url==='/users') {
        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: users.length + 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com'
        })
        return response.end('gravando dados em users')
    }

    return response.setHeader(404).end('página não encontrada.')
})

server.listen(3333)



