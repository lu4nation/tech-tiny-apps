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
  dao.create(newEvent);
  res.status(200);
  res.end();
});

// READ
router.get('/event/:id', function(req, res) {
  var event = dao.read(req.params.id);
  res.json(event);
});

// UPDATE
router.put('/event/:id', function(req, res) {
  var event = req.body;
  dao.update(req.params.id, event);
  res.status(200);
  res.end();
});

// DELETE
router.delete('/event/:id', function(req, res) {
  dao.delete(req.params.id);
  res.status(200);
  res.end();
});

// LIST
router.get('/event', function(req, res) {
  res.json(dao.query());
});

module.exports = router;

