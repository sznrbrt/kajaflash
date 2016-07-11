import passport from 'passport'
import bcrypt from 'bcrypt'
import User from '../models/User'
import Vendor from '../models/Vendor'

const Strategy = require('passport-local').Strategy;

passport.use('user-local', new Strategy({
    usernameField: 'email'
  },
  function(_email, password, cb) {
    User.find({ email: _email }).exec(function(err, users) {
      if (err) { return cb(err); }
      if (!users[0]) { return cb(null, false); }

      let user = users[0];

      bcrypt.compare(password, user.password, (err, isGood) => {
        if (err || !isGood) { return cb(err || { err: isGood + 'not true' }) }
        return cb(null, user);
      })
    });
  }));

passport.use('vendor-local', new Strategy({
    usernameField: 'email'
  },
  function(_email, password, cb) {
    Vendor.find({ email: _email }).exec(function(err, vendors) {
      if (err) { return cb(err); }
      if (!vendors[0]) { return cb(null, false); }

      let vendor = vendors[0];

      bcrypt.compare(password, vendor.password, (err, isGood) => {
        if (err || !isGood) { return cb(err || { err: isGood + 'not true' }) }
        return cb(null, vendor);
      })
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    if(!user) {
      Vendor.findById(id, function(err, vendor) {
        if (err) { return cb(err); }
        cb(null, vendor);
      })
    } else {
      cb(null, user);
    }
  });
});
