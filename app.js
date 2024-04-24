require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// TODO: require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('./public'))

app.get('/', function (req, res) {
    res.render('home', {
        titulo: 'Curso de Node',
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        titulo: 'Curso de Node',
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        titulo: 'Curso de Node',
    });
})

app.get('*', function (req, res) {
  res.sendFile( __dirname + '/public/back/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })    