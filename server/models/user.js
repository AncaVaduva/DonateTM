
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


// create a schema
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  //  required: true,
    lowercase:true
  },
  name: {
    type: String,
    required: true,

  },
  password:{
    type: String,
    required:true
  },
  role: {
    type:String,
    enum:['admin_judet', 'admin_centru', 'angajat_centru', 'client'],
    default:'client'
  }
});  //,  { collection: 'users' }

// the schema is useless so far
// we need to create a model using it

userSchema.pre('save', function (next) {
  var user=this;
  if(this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  }else{
    return next();
  }
})

//create method to compare
userSchema.methods.comparePassword= function (pw, cb) {
  bcrypt.compare(pw, this.password, function (err, isMatch) {
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  })
}
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
