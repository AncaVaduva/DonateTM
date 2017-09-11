
var mongoose = require('mongoose');


// create a schema
var donatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  prenume: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required:true
  },
  blood:{
    type:String,
    required:true
  },
  address:{
    type:String
  },
  CNP:{
    type:Number,
    required:true,
    unique:true
  }
});  //,  { collection: 'users' }

// the schema is useless so far
// we need to create a model using it

var Donator = mongoose.model('Donator', donatorSchema);

// make this available to our users in our Node applications
module.exports = Donator;
