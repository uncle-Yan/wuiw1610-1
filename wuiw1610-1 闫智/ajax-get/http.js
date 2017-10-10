var http = require("http");
var fs = require("fs");
var url =require("url");
var qs  = require("querystring");
var data = ["张三","李四","王五","赵六","李四","李四","张三"];
var server = http.createServer(function (req,res) {
    var u = url.parse(req.url);
    console.log(u)
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
    if(u.pathname=="/search"){
        res.setHeader("content-type","text/plain;charset=utf-8");
        var p = qs.parse(u.query);
        var result = data.filter(function (v,i) {
            if(v==p.a){
                return true;
            }
            return false;
        })
        res.write(JSON.stringify(result));
        res.end();
        return;
    }
})
server.listen(8000);