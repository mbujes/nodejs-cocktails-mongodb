// Cargamos los módulos de express, cors y body-parser
var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
var cocktailRoutes = require('./routes/cocktail.routes'); 
var reviewRoutes = require('./routes/review.routes'); 
//cargar middlewares
app.use(cors());
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas
app.use('/api', cocktailRoutes);
app.use('/api', reviewRoutes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;