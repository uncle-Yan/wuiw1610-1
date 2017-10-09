var http = require("http");
var fs = require("fs");
var path = require("path");
var mine = {
    ".html":"text/html",
    ".css":"text/css",
    ".js":"text/javascript",
    ".png":"image/png",
    ".jpg":"image/jpeg"

}
var server = http.createServer(function (req,res) {
    if(req.url=="/favicon.ico"){
        res.end();
        return;
    }
    if(req.url){
        fs.readFile("."+req.url,function (err,data) {
            res.setHeader("content-type",mine[path.extname(req.url)]+";charset=utf-8");
            res.write(data);
            res.end();
        })
    }else{
        res.writeHead(404);
        res.end();
    }
})
server.listen(8000);