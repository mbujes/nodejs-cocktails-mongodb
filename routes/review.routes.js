// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var ReviewController = require('../controllers/review.controller');
// Llamamos al router
var router = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores

router.post('/reviews/create', ReviewController.createReview);
router.get('/reviews/view/:id', ReviewController.getReviewsById);


// Exportamos la configuración
module.exports = router;