const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recipeSchema = new Schema({
   name: {
     type: String,
     required: true
   },
   picture: {
     type: Boolean,
     default: false
   },
   difficulty: {
     type: String,
     required: true
   },
   quality: {
     type: String,
     required: true
   },
   time_needed: {
     type: String,
     required: true
   }
});

module.exports = mongoose.model('Recipe', recipeSchema);
