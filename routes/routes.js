const router = require('express').Router();
const Recipe = require('../models/recipe');

router.get('/', function(req, res) {
  Recipe.find({}).then(function(results) {
    let recipes = results.filter(function(recipe){
      return recipe;
    });

    res.render('index', { recipes: recipes });
  })
});

module.exports = router;
