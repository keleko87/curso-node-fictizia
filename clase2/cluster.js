const cluster = require('cluster');
const http = require('http');
const url = require('url');
const cpus = require('os').cpus().length; // nproc

if (cluster.isMaster) {
  console.log('Proceso maestro con PID:', process.pid);

  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log('hijo con PID ' + worker.process.pid + ' muerto');
    cluster.fork();
  });

} else {
  console.log('Arrancado hijo con PID:', process.pid);

  const server = http.createServer().listen(8080);

  server.on('request', (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/kill') {
      res.writeHead(200, {
          'Content-Type': 'text/plain'
      });
      res.end('Has matado al proceso hijo ' + process.pid);
      process.exit(0);
    } else {
      res.writeHead(200, {
          'Content-Type': 'text/plain'
      });
      res.end('Hola desde ' + process.pid);
    }
  });
}