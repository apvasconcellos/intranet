var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Intranet' });
});
/* Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* Message page. */
router.get('/mensagens', function(req, res, next) {
  res.render('mensagens', { title: 'Mensagens' });
});

/* Database page. */

router.get('/database', function(req, res, next) {
  res.render('database', { title: 'Database' });
});

router.get('/avisos', function(req, res, next) {
  res.render('avisos', { title: 'Avisos' });
});

router.get('/catalogo', function(req, res, next) {
  res.render('catalogo', { title: 'Catálogo' });
});


module.exports = router;
