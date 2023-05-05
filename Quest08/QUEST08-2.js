const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const bar = queryObject.bar || 'world~~!!';
  req.url.startsWith('/foo') && req.method === 'GET' && bar;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Hello, ${bar}`);
  res.statusCode = 200;
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
