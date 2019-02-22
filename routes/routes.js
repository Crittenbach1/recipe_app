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

router.post('/recipes', function(req, res){
  let newRecipe = new Recipe({ name: req.body.name });

  newRecipe
    .save()
    .then(function(result){
      console.log(result);
      res.redirect('/');
    }).catch(function(err){
      console.log(err);
      res.redirect('/');
    });
});

module.exports = router;
