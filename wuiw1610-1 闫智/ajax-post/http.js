var http = require("http");
var fs = require("fs");
var url =require("url");
var qs  = require("querystring");
var users = [];
var server = http.createServer(function (req,res) {
    var u = url.parse(req.url);
    // console.log(u)
    if(u.pathname=="/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname=="/"||u.pathname=="/index.html"){
        fs.readFile("./index.html",function (err,data) {
            res.setHeader("content-type","text/html;charset=utf-8");
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/login"){
        var data = "";
        req.on("data",function (a) {
            data += a;
        })
        req.on("end",function () {
            users.push(qs.parse(data));
            console.log(users);
            res.end();
        })
    }
})
server.listen(8000);