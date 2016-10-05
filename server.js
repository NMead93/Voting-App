'use strict';

var express = require('express');
var routes = require('/home/ubuntu/workspace/app/routes/index.js');
var mongo = require('mongodb').MongoClient;
var app = express();

mongo.connect('mongodb://localhost:27017/votingjs', function (err, db) {
  
  if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }
    
    app.use('/public', express.static('/home/ubuntu/workspace/public'));
    app.use('/controllers', express.static('/home/ubuntu/workspace/app/controllers'));
    
    routes(app, db);
    
    app.listen(8080, function () {
      console.log('Listening on port 8080...');
  });
});