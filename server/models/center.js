
var mongoose = require('mongoose');


// create a schema
var centerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    //  required: true,
    lowercase:true
  },
  lat: Number,
  long: Number,
  address: {
    type: String,
    required: true,

  },
  number:{
    type: Number,
    required:true
  }
});  //,  { collection: 'users' }


var Center = mongoose.model('Center', centerSchema);

// make this available to our users in our Node applications
module.exports = Center;
