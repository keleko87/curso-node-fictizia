#!/usr/bin/env node
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile('clase2/index.js', 'utf-8').then((data) => {
  return writeFile('copy.js', data);
}).then(() => {
  console.log('OK')
}).catch(() => {
  console.log('KOOOO')
})