// Cargamos los modelos para usarlos posteriormente
var Cocktail = require('../models/cocktail.model');

// Conseguir datos de un usuario
function getCocktail(req, res){
  var userId = req.params.id;
//buscar un documento por un  id
  Cocktail.findById(userId, (err, user) => {
      if(err)return res.status(500).send({message: 'Error en la petición'});
      if(!user) return res.status(404).send({message: 'EL usuario no existe'});
      followThisUser(req.user.sub, userId).then((value) => {
          user.password = undefined;
          return res.status(200).send({
              user,
              following: value.following,
              followed: value.followed
          });
      });
      
  });
}