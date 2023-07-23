var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/hola', function(req, res, next) {
  res.send({message:'hola'});
});

module.exports = router;
