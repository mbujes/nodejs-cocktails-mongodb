// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var CocktailController = require('../controllers/cocktail.controller');
// Llamamos al router
var api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/cocktails/:id', CocktailController.getCocktail);
// Exportamos la configuración
module.exports = api;