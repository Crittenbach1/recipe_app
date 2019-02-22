const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stepSchema = new Schema({
   recipe_id: {
     type: Schema.Types.ObjectId,
     ref: 'Recipe'
   },
   description: {
     type: String,
     required: true
   }



});

module.exports = mongoose.model('Step', stepSchema);
