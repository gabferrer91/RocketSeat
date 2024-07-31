// gravando dados no servidor

import http from 'node:http';

const users = [];

const server = http.createServer((request, response) => {
    const {method, url} = request                   // requests devolve os dois objs: 'method' e 'url'. É o msm que fazer const metodo = request.method
    
    if (method === 'GET' && url==='/users') {
        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com'
        })
        return response.end('gravando dados em users')
    }

    return response.end('hello my man!')
})

server.listen(3333)
