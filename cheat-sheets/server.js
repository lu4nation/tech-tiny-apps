var http = require('http');
var express = require('express');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var router = require('./router');


var app = express();
var isdev = true;

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(layouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found!!');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var error = isdev ? err : {};
  res.render('error', {
    title: err.message,
    message: err.message,
    error: error
  });
  next();
});

if (isdev) {
  console.log('dev mode');
  app.use(function(req, res, next) {
    console.log('method: %s', req.method);
    next();
  });
}

var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Server running at http://%s:%d/', 
    server.address().address, 
    server.address().port);
});

