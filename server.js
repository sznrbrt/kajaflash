'use strict';

import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import indexRoute from './server/routes/index'
import mongoose from 'mongoose'
import logger from 'morgan'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import User from './server/models/User'
import passport from 'passport'
import config from './webpack.config';
import webpack from 'webpack';
import session from 'express-session'

import PassportMiddleware from './server/middlewares/passport'

dotenv.load();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/kajaflash';
const compiler = webpack(config);

mongoose.Promise = global.Promise;
mongoose.connect(MONGOURL, err => {
  console.log(err || `MongoDB connected to ${MONGOURL}`);
});

let app = express();

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


// // Do not allow cors in dev?!
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", 'true');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
//   next();
// });

app.use(express.static('public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('cookie-parser')('keyboardcat'));
// app.use(session({ secret: 'keyboardcat', resave: true, saveUninitialized: false, maxAge: (7 * 26 * 60 * 60 * 1000), cookie: {secure: false, httpOnly: false} }));
const MongoStore = require('connect-mongo')(session);
app.use(session({
    secret: 'foo',
    store: new MongoStore({
      url: 'mongodb://localhost/kajaflash',
      ttl: 14 * 24 * 60 * 60 // = 14 days. Default,
    }),
    resave: true,
    saveUninitialized: false
}));

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

app.use('/data', indexRoute);

app.get('*', function(req, res) {
  return res.sendFile(path.resolve( __dirname, 'public' , 'index.html'));
});

app.listen(PORT,(err) => {
  if(err) console.log(err);
  console.log(`Listening on PORT:${PORT}`);
});

//  404 Handler
app.use((req, res) => {
  res.status(404).send('Oopps! Page not exits. 404.');
});

export default app;
