var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('salir', { title: 'Salir' });
});

module.exports = router;
