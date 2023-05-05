const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  req.url.startsWith('/foo') && req.method === 'POST' && bar;
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    const obj = JSON.parse(body);
    const str = obj.bar || 'World';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Hello, ${bar}`);
    res.end();
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
