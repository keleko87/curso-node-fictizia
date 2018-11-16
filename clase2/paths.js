const http = require('http');
const url = require('url');

// const demoURL = 'http://localhost:3000/ruta?parametro=dato#detalle';

// http.createServer((req, res) => {
//   const urlData = url.parse(req.url, true);
//   // const urlData = new url.URL(req.url, true);
//   console.log(urlData);
// }).listen(8080, 'localhost');


http.createServer(function (req, res) {
  const pathname = url.parse(req.url).pathname;

  if (pathname === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Index!');
  } else if (pathname === '/otro') {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('sencillamente otra página');
  } else if (pathname === '/alindex') {
    res.writeHead(301, {
      'Location': '/'
    });
    res.end();    
    
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('Querido... 404!');
  }
}).listen(8080, 'localhost');

