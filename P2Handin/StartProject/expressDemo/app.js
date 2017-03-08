var favicon = require('serve-favicon');
var path = require('path');
var express = require('express');
var app = express();
var logger = require('morgan');

app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
app.use(logger('dev'));

app.get('/', function(req, res){
  res.send('hello world');
});
module.exports= app;