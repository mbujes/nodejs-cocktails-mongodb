// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');
// *Cargamos el fichero app.js con la configuración de Express
var app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = process.env.PORT || 80;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb+srv://cocktail-app-user:tacVA5ORGJoKDs3b@cluster0.hdtbh.mongodb.net/cocktail-app?retryWrites=true&w=majority')
  .then(() => {
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log("La conexión a la base de datos cocktail-app se ha realizado correctamente")

    // CREAR EL SERVIDOR WEB CON NODEJS
    app.listen(port, () => {
        console.log("servidor corriendo");
    });
  })
  // Si no se conecta correctamente escupimos el error
  .catch(err => console.log(err));