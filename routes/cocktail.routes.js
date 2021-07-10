// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var CocktailController = require('../controllers/cocktail.controller');
// Llamamos al router
var router = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores


router.post('/cocktails/create', CocktailController.createCocktail);
router.get('/cocktails/list', CocktailController.getCocktailsByCategory);
router.get('/cocktails/search', CocktailController.getCocktailsByName);
router.get('/cocktails/view/:id', CocktailController.getCocktail);
router.get('/cocktails/delete/:id', CocktailController.deleteCocktail);

// Exportamos la configuración
module.exports = router;