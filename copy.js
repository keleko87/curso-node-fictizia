const http = require('http');

http.createServer((req, res) => {
  console.log('hola');
  // Permite definir la cabecera de nuestra respuesta
  res.writeHead(403, {
    'Content-type': 'text/html'
  });
  res.write('<p>...</p>');
  res.write('....');
  res.write('....');
  res.end('<h1>Hello World</h1>');
}).listen(8080);


