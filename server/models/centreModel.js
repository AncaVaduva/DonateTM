
var mongoose = require('mongoose');



// create a schema
var centreSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  long: Number,
  location: String,
  meta: {
    website: String
  },
  created_at: Date,
  updated_at: Date
} , { collection: 'centre' });

// the schema is useless so far
// we need to create a model using it
var Centre = mongoose.model('Centre', centreSchema);

// make this available to our users in our Node applications
module.exports = Centre;
