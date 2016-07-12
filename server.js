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

import PassportMiddleware from './server/middlewares/passport'

dotenv.load();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/kajaflash';

mongoose.Promise = global.Promise;
mongoose.connect(MONGOURL, err => {
  console.log(err || `MongoDB connected to ${MONGOURL}`);
});

let app = express();

app.use(express.static('public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboardcat', resave: true, saveUninitialized: false, maxAge: (7 * 26 * 60 * 60 * 1000) }));
// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './public/index.html'));
});


app.use('/data', indexRoute);

app.listen(PORT,(err) => {
  if(err) console.log(err);
  console.log(`Listening on PORT:${PORT}`);
});

//  404 Handler
app.use((req, res) => {
  res.status(404).send('Oopps! Page not exits. 404.');
});

export default app;
