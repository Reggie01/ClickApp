﻿'use strict';
console.log(process.env.PORT);
console.log("starting app");
/* var express = require('express'),
        routes = require('./app/routes/index.js'),
  mongoose = require('mongoose'), 
    passport  = require('passport'),
      session = require('express-session');

var app = express();
if(!process.env.APP_URL) {
  console.log("loading env file...");
  require('dotenv').load();
}

require('./app/config/passport')(passport); 

mongoose.connect(process.env.MONGO_URI); 
    
app.use('/controllers', express.static(__dirname + '/app/controllers'));    
app.use('/public', express.static(__dirname  + '/public'));
app.use('/common', express.static(__dirname + '/app/common'));

app.use(session({
   secret: 'secretClementine', 
   resave: false,
   saveUnitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
   
routes(app, passport);

var port = process.env.PORT || 8090;
app.listen(port, function() {
    console.log('Listening on port '+ port + '...');
});


*/



