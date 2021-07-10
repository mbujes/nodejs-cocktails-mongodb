// Cargamos los modelos para usarlos posteriormente
var Cocktail = require('../models/cocktail.model');
var Review = require('../models/review.model');

exports.getCocktail = async function (req, res) {
  try {
    const cocktail = await Cocktail.findById(req.params.id);
    return res.status(200).json({ cocktail })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

exports.createCocktail = async function (req, res) {
  try {
    const newCocktail = await Cocktail.create({ ... req.body });
    return res.status(200).json({ cocktail: newCocktail })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

exports.getCocktailsByCategory = async function (req, res) {
  const category = req.query.category;
  try {
    var cocktails = [];
    if (category === 'all') {
      cocktails = await Cocktail.find({});
    } else {
      cocktails = await Cocktail.find({ category });
    }
    
    return res.status(200).json({ cocktails })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

exports.getCocktailsByName = async function (req, res) {
  const query = req.query.query;
  try {
    const cocktails = await Cocktail.find({name: {'$regex': query, '$options' : 'i'}});
    return res.status(200).json({ cocktails })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

exports.deleteCocktail = async function (req, res) {
  const id = req.params.id;
  try {
    await Cocktail.deleteOne({_id: id});
    await Review.deleteMany({ cocktailId: id });
    return res.status(200).json({});
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}