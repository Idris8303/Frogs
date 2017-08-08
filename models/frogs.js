const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let frogSchema = new Schema({
  size: Number,
  type: String,
  color: String,
})

module.exports = mongoose.model('Frog', frogSchema);
