var express = require('express');
var dao = require('./dao');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cheat Sheets' });
});

// REST Services
// CREATE
router.post('/event', function(req, res) {
  var newEvent = req.body;
  console.log(newEvent);
  dao.save(newEvent);
  res.status(200);
  res.end();
});

// LIST
router.get('/event', function(req, res) {
  res.json(dao.events);
});

module.exports = router;

