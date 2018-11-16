const { EventEmitter } = require('events');
const pingPong = new EventEmitter();

let pingNumero = 1;

console.log('Bienvenido al juego de Ping/Pong!');
console.log('Empezamos en 5 segundos....');

setTimeout(() => {
  console.log('Primer Ping... que desencadenará el juego');
  pingPong.emit('ping', pingNumero);
  pingNumero++;
}, 5000);

pingPong.on('ping', (numero) => {
  console.log('Llegó el Ping('+numero+'). Emitimos Pong');
  setTimeout(() => pingPong.emit('pong'), 1000);
});

pingPong.on('pong', () => {
  console.log('Llegó el Pong. Emitimos Ping');
  setTimeout(() => {
    pingPong.emit('ping', pingNumero);
    pingNumero++;
  }, 1000);
});