const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('paso por aqui');

    next();
});

app.use((req, res, next) => {
    console.log('paso por aqui');

    next();
});

app.use('/dashbord', (req, res, next) =>{

    const login = req.query.name
    if(login === 'santiago'){
        console.log('Autorizado');
        next();
    }else{
        res.send('No autorizado');
    }
})

app.get('/dashbord', (req, res) =>{
    res.send('Bienvenido');
})

app.get('/profile', (req, res) =>{
    res.send('profile page');
});

app.listen(3000);
console.log(`Server port ${3000}`);