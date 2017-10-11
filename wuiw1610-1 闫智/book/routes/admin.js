var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
});
router.get('/info', function(req, res, next) {
    res.render('admin/info');
});
router.get('/pass', function(req, res, next) {
    res.render('admin/pass');
});
router.get('/adv', function(req, res, next) {
    res.render('admin/adv');
});
router.get('/addadv', function(req, res, next) {
    res.render('admin/addadv');
});
router.get('/cate', function(req, res, next) {
    res.render('admin/cate');
});
router.get('/addcate', function(req, res, next) {
    res.render('admin/addcate');
});
router.get('/article', function(req, res, next) {
    res.render('admin/article');
});
router.get('/message', function(req, res, next) {
    res.render('admin/message');
});
router.get('/link', function(req, res, next) {
    res.render('admin/link');
});
router.get('/addlink', function(req, res, next) {
    res.render('admin/addlink');
});
router.get('/user', function(req, res, next) {
    res.render('admin/user');
});
module.exports = router;
