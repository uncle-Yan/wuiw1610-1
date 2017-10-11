var express = require('express');
var router = express.Router();

// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });

router.get('/', function(req, res) {
    res.send('/categroy/list');
});

router.get('/show', function(req, res) {
    res.send('/list/show');
});
module.exports = router;