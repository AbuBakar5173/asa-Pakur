var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { currentRoute: '/' });
});

router.get('/fileComplaint', function (req, res, next) {
  res.render('fileComplaint', { currentRoute: '/fileComplaint' });
});

router.get('/trackComplaint', function (req, res, next) {
  res.render('trackComplaint', { currentRoute: '/trackComplaint' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { currentRoute: '/about' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { currentRoute: '/contact' });
});

module.exports = router;
