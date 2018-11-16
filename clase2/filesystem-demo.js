const fs = require('fs');
const util = require('util');


// function writeFile(name, data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('clase2/index.js', data, (err) => {
//       if (!err) {
//         resolve('Datos guardados en el \'index.js\'');
//       } else {
//         reject(err);
//       }
//     });
//   }) 
// }

// function readFile(url) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(url, 'utf8', (err, data) => {
//       if (!err) {
//         resolve(data)
//       } else {
//         reject(err);
//       }
//     })
//   });
// }


// CONVERTIR CALLBACKS A PROMESAS
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


readFile('clase2/index.js', 'utf-8').then((data) => {
  return writeFile('copy.js', data);
}).then(() => {
  console.log('OK')
}).catch(() => {
  console.log('KOOOO')
})


// MODO SINCRONO


