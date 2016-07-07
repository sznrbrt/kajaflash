'use strict';

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import indexRoute from './server/routes/index'
import mongoose from 'mongoose'
import logger from 'morgan'

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

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, './public/index.html'));
});


app.use('/data', indexRoute);

app.listen(PORT,(err) => {
  if(err) console.log(err);
  console.log(`Listening on PORT:${PORT}`);
});

//  404 Handler
app.use((req, res) => {
  res.status(404).render('404');
});

export default app;
