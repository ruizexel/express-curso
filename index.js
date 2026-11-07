// const http = require('http');
// const fs = require('fs')

// const server = http.createServer( (request, response) => {
//     const read = fs.createReadStream('./static/index.html');

//     read.pipe(response);
// } );

// server.listen('3000');
// console.log(`Listen on port ${3000}`);

const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.end('Hello world');
});

app.get('/about', (req, res) => {
   res.end('About');
});

app.get('/weather', (req, res) => {
   res.end('The current weather is Nice');
});

app.use( (req, res) => {
   res.status(404).send('No se encontro tu pagina');
} );

app.listen(3000);
console.log(`Server port in ${3000}`);