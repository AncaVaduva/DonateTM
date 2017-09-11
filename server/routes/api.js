const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err);
});
db.once('open', function () {
  console.log('connected.');
});

var User = require("../models/user");
var Centre = require("../models/centreModel");

/* GET api listing. */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



router.get('/', (req, res) => {
 console.log("api works!");
});


//users path
router.get('/users',(req, res)=>{
  var newUser = User({
    name: 'Peter Quill',
    email: 'starlord55',
    password: 'password',
    level: 0
  });

// save the user
  newUser.save(function(err) {
    if (err) throw err;

    console.log('User created!');
  });
});

router.get('/map', (req, res)=>{
//  console.log("aici vine harta");
//  db.centre.insert();
/* var newCentre = Centre({
    name:"Centrul de Transfuzie Sanguină",
    lat: 45.7372442,
    long:21.2376921
  });
  newCentre.save(function (err) {
    if(err) throw err;
    console.log("centre adaugat");
  });
*/

 Centre.find({} , (function (err, centre) {

    res.send(JSON.stringify(centre));
   console.log(centre);
   console.log("----------------------------------------------");

 }));
});

router.post('/authenticate', (req,res)=>{
  //check the email and password

  var username = req.body.username;

  var pass = req.body.password;
  User.find({password:pass,  name:username}, (function (err, users) { //{email:req.body['email']
    res.send(JSON.stringify(users));

    console.log(users);
    console.log(req.headers);
    console.log(req.body);

  }))
});

module.exports = router;

