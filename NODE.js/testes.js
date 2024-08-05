import http, { METHODS } from 'node:http';

// Create a local server to receive data from (req -> request , res -> response)

const lista = []

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.method === 'POST' && req.url === '/') {
    return res.end('Nothing to POST')
  }

  if (req.method === 'GET' && req.url === '/') {
  res.end(JSON.stringify({
    data: 'Hello World! Main page here! -> http://localhost:8000/',
    request: {
        req: req.method, 
        url: req.url
    }
  }));
}

  if (req.method === 'POST' && req.url === '/users') {
    lista.push(JSON.stringify({
      id: lista.length + 1,
      nome: 'Alberto',
      senha: '1234pereira*'
    }))
    return res.end('gravando dados')
  }
  
  if (req.method === 'GET' && req.url === '/users') {
    return res
    .end(JSON.stringify(lista))
  }

});

server.listen(8000);


