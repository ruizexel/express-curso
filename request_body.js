const express = require('express');

const app = express();


app.use(express.text());
app.use(express.json());

// sirve para hacer la traduccion de la infomracion de los forms, y el extendes false, es para aclara que no necesitan traducciones pesadas
app.use(express.urlencoded({extended: false}));


// maner de manejar los path variables que mandan desde el navegador
app.get('/hello/:user', (req, res) =>{

    console.log(req.query);
    res.send(`Hello ${req.params.user}`);
});

app.post('/user', (req, res) =>{
    console.log(req.body);
    res.send('Nuevo usuario creado');
});

app.get('/add/:x/:y', (req, res) =>{
    console.log(req.params.X);
    console.log(req.params.y);

    const result = parseInt(req.params.x) + parseInt(req.params.y);

    res.send(`La suma da: ${result}`)


})

app.get('/users/:username/photo', (req, res) =>{

    console.log(req.params.username)

    if(req.params.username === "santiago"){
        return res.sendFile('./static/index.html', {
            root: __dirname
        });
    }

    res.send('El usuario no tiene acceso');
});


app.get('/name/:name/age/:age', (req, res) =>{
    res.send(`El usuario es: ${req.params.name} y su edad es: ${req.params.age}`)
})
app.listen('3000');
console.log('Esta funcionando');