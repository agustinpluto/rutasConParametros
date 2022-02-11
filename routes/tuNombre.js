var express = require('express');
var router = express.Router();

router.get('/tuNombre', function(req, res, next) {
  res.render('tuNombre', { title: 'Tu NOMBRE' });
});

module.exports = router;
