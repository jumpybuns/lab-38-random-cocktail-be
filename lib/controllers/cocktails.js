const { Router } = require('express');
const Cocktail = require('../models/Cocktail');

module.exports = Router()
  .post('/', (req, res, next) => {
    Cocktail.insert(req.body)
      .then((cocktail) => res.send(cocktail))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Cocktail.find()
      .then((cocktail) => res.send(cocktail))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Cocktail.delete(req.params.id)
      .then((cocktail) => res.send(cocktail))
      .catch(next);
  });
