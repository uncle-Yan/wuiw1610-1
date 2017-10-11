var express = require('express');
var app = express();

// 对网站首页的访问返回 "Hello World!" 字样
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
// app.get('/list', function (req, res) {
//     res.send('Hello List!');
// });
//
// // 网站首页接受 POST 请求
// app.post('/', function (req, res) {
//     res.send('POST 请求');
// });
//
// // /user 节点接受 PUT 请求
// app.put('/user', function (req, res) {
//     res.send('PUT 请求');
// });
//
// // /user 节点接受 DELETE 请求
// app.delete('/user', function (req, res) {
//     res.send('DELETE 请求');
// });


// 路由路径
app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});
//可以有b也可以没有b

app.get('/ab+', function(req, res) {
    res.send('ab+');
});
//最少一个b

app.get('/a*b', function(req, res) {
    res.send('a*b');
});


app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});
//可以有cd，也可以没有


app.get(/0/, function(req, res) {
    res.send('匹配任何路径中含有 0 的路径');
});

app.get(/1/,function (req,res,next) {
    console.log('第1个函数');
    next();
},function (req,res) {
    console.log('第2个函数');
    res.send('第2个函数');
})

var cb0 = function (req, res, next) {
    console.log('第1个函数');
    next();
}

var cb1 = function (req, res, next) {
    console.log('第2个函数');
    next();
}

var cb2 = function (req, res) {
    console.log('第3个函数');
    res.send('第3个函数');

}

app.get('/w', [cb0, cb1, cb2]);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});