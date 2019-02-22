const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recipeSchema = new Schema({
   name: {
     type: String,
     required: true
   },
   steps: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Step'
    }
    ],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);
