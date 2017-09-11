var express=  require('express');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var config =  require('./server/config/main');
var User =  require('./server/models/user');
var jwt = require('jsonwebtoken');
var morgan =  require('morgan');
var path = require('path');
var http = require('http');
var axios = require('axios');


app= express();

var port = 3000;

//use body parser to get post request for api

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var Center = require("./server/models/center");
var Donator = require("./server/models/donator");

///log request to consolen
app.use(morgan('dev'));
//intialize passport
app.use(passport.initialize());


//connect to db
mongoose.Promise = global.Promise;
mongoose.connect(config.database);


//brig passport
require('./server/config/passport')(passport);
apiRotes= express.Router();


apiRotes.post('/register', function (req, res) {
  res.setHeader('Content-Type', 'application/x-www-form-urlencoded');


  if(!(req.body.email) &&  !(req.body.password)){
    res.json({succes:false, message:'enter email'});
  }else{
        var newUser = new User({
              email :req.body.email,
              password: req.body.password,
              name: req.body.name,
              role: req.body.role
          });

           console.log(newUser);
          // save the user
          newUser.save(function(err,resp) {
            if (err) {
              console.log(err);
              res.send({
                message: 'something went wrong'
              });
            } else {
              res.send({
                message: 'the USER has been saved'
              });
            }
          });
      }
});


apiRotes.post('/authenticate', function (req, res) {

  res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  console.log(req.body.email);
  User.findOne({
    email:req.body.email

  }, function (err, user) {
    if(err) throw err;
    if(!user){
      res.send({succes:false, message:'Nu exista user-ul respectiv'});
    }
    else{
      //check paas macth
      user.comparePassword(req.body.password, function (err, isMatch) {
        if(isMatch && !err){
          var token = jwt.sign(user, config.secret,{
            expiresIn: 10080
          });
          res.json({succes:true, token: token, user:user});
        }else{
          res.send({succes:false, message:"Parola sau utilizatorul nu sunt corecte"});

        }

      });
    }
  });
});

var APIGoogledata= 'https://maps.googleapis.com/maps/api/geocode/json?address=';

apiRotes.post('/addcenter', function (req,res) {
 res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
   var resultsdata=[];

  var request = require('request');
  var addrs = encodeURIComponent(req.body.address);
  request(`${APIGoogledata}`+addrs, function (error, response, bodyResult) {
    if (!error && response.statusCode == 200) {
     resultsdata = JSON.parse(bodyResult).results[0].geometry.location; // Show the HTML for the Google homepage.
    }
   // console.log(JSON.parse(bodyResult).results[0]);

    if(!req.body.namecenter)
    { console.log({succes: false, message:"Nu exista nume pentru centru"}) }
    else{

       var newCenter = new Center({
       name: req.body.namecenter,
       lat: resultsdata.lat,
       long:resultsdata.lng,
       address:req.body.address,
       number:req.body.phone

       });
        console.log(newCenter);
      newCenter.save(function(err,resp) {
        if (err) {
          console.log(err);
          res.send({
            message: 'something went wrong'
          });
        } else {
          res.send({
            message: 'the Center has been saved'
          });
        }
      });
    }


  });




});

apiRotes.post('/deletecenter', function (req,res) {
  //res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  //console.log(req);
  //console.log(req.body);
  if(!req.body.namecenter){res.send({succes:false, message:'Nu ai introdus numele '})}
  else{

    Center.remove({name: req.body.namecenter}, function (err, resp) {
        if (err) {
          console.log({
            message: 'something went wrong'
          });
        } else {
          console.log({
            message: 'the center has been deleted'
          });
        }
    });
  }

});

apiRotes.post('/adddonator', function (req, res) {
 // res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  //console.log(req.body);
  var donator = new Donator({
    name: req.body.name,
    prenume: req.body.prenume,
    age:req.body.age,
    blood: req.body.blood,
    address : req.body.address,
    CNP: req.body.CNP
  })
    donator.save( function (err, res) {
      if(err){console.log("Exista o eroare");
      console.log(err)}
      else{ console.log("Donatorul cu CNP:", req.body.CNP, "a fost adaugat")}
    })
})

apiRotes.post('/searchdonator', function (req, res) {
  // res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  console.log(req.body);

  Donator.find({'CNP': req.body.CNP}, function (err, donatordata) {
    if(err){res.send("Exista o eroare");
      console.log(err)}
    else{ res.send( JSON.stringify(donatordata))}
  })
})

apiRotes.get('/', function(req, res){

});

apiRotes.get('/map', (req, res)=>{
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

  Center.find({} , (function (err, centers) {

    res.send(JSON.stringify(centers));
    console.log(centers);
    console.log("----------------------------------------------");

  }));
});

apiRotes.post('api/addcenter', function (err,res) {
  res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
})

apiRotes.get('/testget', (req,res)=>{
  console.log(req.param());
});


app.use('/api', apiRotes);

app.use(express.static(path.join(__dirname, 'dist')));
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Create HTTP server.
 */
const server = http.createServer(app, function  (request, response) {
  response.writeHead(200, {"Content-Type ":"application/x-www-form-urlencoded"});
//  response.end("Hello World!\n");


});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
