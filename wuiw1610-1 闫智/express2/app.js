var express = require('express');
var app = express();

var categroy = require('./router/categroy');
app.use('/categroy', categroy);

var list = require('./router/list');
app.use('/categroy/list', list);

var main = require('./router/main');
app.use('/', main);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});