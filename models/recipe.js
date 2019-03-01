const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let recipeSchema = new Schema;

    recipeSchema.add({
      name: {
        type: String,
        required: true
      }
    });



module.exports = mongoose.model('Recipe', recipeSchema);
