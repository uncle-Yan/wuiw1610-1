var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req,res) {
    if(req.url=="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url=="/"||req.url=="/index.html"){
        fs.readFile("./index.html",function (err,data) {
            res.setHeader("content-type","text/html;charset=utf-8");
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.css"){
        fs.readFile("./index.css",function (err,data) {
            res.setHeader("content-type","text/css;charset=utf-8");
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=="/index.js"){
        fs.readFile("./index.js",function (err,data) {
            res.setHeader("content-type","text/javascript;charset=utf-8");
            res.write(data);
            res.end();
        })
        return;
    }

    res.writeHead(404);
    res.end();

})
server.listen(8000);