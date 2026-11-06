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
    res.sendFile('./static/index.html', {
        root: __dirname
    });
});

app.listen(3000);
console.log(`Server port in ${3000}`);