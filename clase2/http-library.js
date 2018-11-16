const http = require('http');

let data = '';
// HTTP LIBRARY
http.get('http://ghibliapi.herokuapp.com/films', (response) => {
  response.setEncoding('utf-8');
  response.on('data', (chunk) => {
    data += chunk;
  }).on('end', ()=> {
    try {
      const json = JSON.parse(data);
      console.log(`El numero de pelis: ${json.length}`);
    } catch (error) { 
      console.log(error);
    }
  })
}).on('error', (error) => {
    console.log('errror:', error);
})