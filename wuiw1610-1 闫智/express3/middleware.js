var express=require("express");
var app = express();
var fs = require("fs");

app.use(function(req,res,next){
    var t = new Date().toLocaleTimeString();
    fs.appendFile('./log.text',t+'\n',function(err){
        if (err) throw err;
        next();
    })
})
app.get('/',function(req,res){
    res.send('time');
})
app.get('/list',function(req,res){
    res.send('time');
})

app.listen(3000);