// Cargamos los modelos para usarlos posteriormente
var Review = require('../models/review.model');

exports.createReview = async function (req, res) {
  try {
    const newReview = await Review.create({ ... req.body });
    return res.status(200).json({ review: newReview })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

exports.getReviewsById = async function (req, res) {
  const cocktailId = req.params.id;
  try {
    const reviews = await Review.find({ cocktailId });
    return res.status(200).json({ reviews: reviews })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}