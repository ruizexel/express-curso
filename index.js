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

// app.get('/', (req, res) => {
//    res.end('Hello world');
// });

// app.get('/about', (req, res) => {
//    res.end('About');
// });

// app.get('/weather', (req, res) => {
//    res.end('The current weather is Nice');
// });

// app.use( (req, res) => {
//    res.status(404).send('No se encontro tu pagina');
// } );

// Protocolo http

// app.get('/products', (req, res) =>{
//    res.send('lista de productos');
// });

// app.post('/products', (req, res) =>{
//    res.send('creando productos');
// });

// app.put('/products', (req, res) =>{
//    res.send('actualizando producto');
// })

// app.patch('/products', (req, res) =>{
//    res.send('actualizando una parte del producto');
// });

// app.delete('products', (req, res) => {
//    res.send('producto eliminado');
// })


app.get('/', (req, res) =>{
    res.send('Hello word!');
});


app.get('/miArchivo', (req, res) =>{
    res.sendFile('./image.png', {
        root: __dirname
    })
})

app.get('/user', (req, res) =>{
    res.json({
        "firstname": "santiago",
        "lasname" : "ruiz gallego",
        "age": 20,
        "points" : [1, 2, 3],
        addres : {
            city: "cali",
            country: "valle del cauca"
        }
    });
})

app.listen(3000);
console.log(`Server port in ${3000}`);