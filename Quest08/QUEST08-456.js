const http = require('http');
const server = http.createServer();

function handleUploadRequest(req, res) {
  const chunks = [];
  let fileSize = 0;
  req.on('data', (chunk) => {
    chunks.push(chunk);
    fileSize += chunk.length;
  });
  req.on('end', () => {
    const data = Buffer.concat(chunks);
    const filename = `pic_${Date.now()}.jpg`;
    const filePath = `./uploads/${filename}`;
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.setHeader('Content-Type', 'text/plain');
      res.end(filePath);
    });
  });
}

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/pic/upload') {
    handleUploadRequest(req, res);
  }
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

function handleDownloadRequest(req, res) {
  const filePath = req.url.replace('/pic/download', './uploads');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    res.setHeader('Content-Disposition', `attachment; filename=pic.jpg`);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.end(data);
  });
}
server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/pic/upload') {
    handleUploadRequest(req, res);
  } else if (req.method === 'GET' && req.url.startsWith('/pic/show')) {
    handleShowRequest(req, res);
  } else if (req.method === 'GET' && req.url.startsWith('/pic/download')) {
    handleDownloadRequest(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
