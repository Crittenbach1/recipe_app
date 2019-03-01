const router = require('express').Router();
const Recipe = require('../models/recipe');


router.get('/', function(req, res) {
  Recipe.find({}).then(function(results) {
    let recipes = results.filter(function(recipe){
      return recipe;
    });

    let recipeTemplate =
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

router.post('/recipes/:id/steps', function(req, res){

  let recipeId = req.params.id;

  Recipe.findById(recipeId)
    .exec()
    .then(function(recipe) {
      var step = {description: req.body.description};

      if (Array.isArray(recipe.steps)) {
          recipe.steps.push(step);
          console.log(recipe);
      } else {
          recipe.steps = [];
          recipe.steps.push(step);
      }
    recipe
   .save()
    }).then(function(result){
       res.redirect('/');
    })

  });

module.exports = router;
