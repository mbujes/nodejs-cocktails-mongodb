// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var ReviewSchema = Schema({
    cocktailId: String,
    name: String,
    message: String,
    rating: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Review', ReviewSchema);