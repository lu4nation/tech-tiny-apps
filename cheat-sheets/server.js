var http = require('http');
var express = require('express');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var router = require('./router');


var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static(__dirname + '/public'));
app.use('/', router);
// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  var err = new Error('Not Found!!');
  err.status = 404;
  next(err);
});

//TODO error handlers
*/


var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Server running at http://%s:%d/', 
    server.address().address, 
    server.address().port);
});

