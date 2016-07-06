'use strict';

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './public/index.html'));
});


app.listen(PORT,(err) => {
  if(err) console.log(err);
  console.log(`Listening on PORT:${PORT}`);
});
