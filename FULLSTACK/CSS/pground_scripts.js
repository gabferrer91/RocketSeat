console.log('oi')

import http from "node:http";

const port = 8000

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
    res.end('<p>oi</p>')
  });
  
  server.listen(port);

