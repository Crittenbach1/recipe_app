const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stepSchema = new Schema({
   description: {
     type: String,
     required: true
   }
});

let recipeSchema = new Schema;

    recipeSchema.add({
      steps: [stepSchema],
      name: {
        type: String,
        required: true
      }
    });

module.exports = mongoose.model('Recipe', recipeSchema);
