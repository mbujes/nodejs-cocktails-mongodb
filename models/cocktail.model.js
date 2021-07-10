// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var CocktailSchema = Schema({
    name: String,
    instructions: String,
    ingredients: [String],
    measures: [String],
    category: String,
    alcoholic: Boolean,
    glass: String,
    image: String
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Cocktail', CocktailSchema);