var url = require("url");
var u = "https://www.baidu.com/s?wd=url&tn=98012088_5_dg&ch=11";

var urlObj = url.parse(u);
// console.log(urlObj);

var urlstr = url.format(urlObj);
// console.log(urlstr);

var newurl = url.resolve(u,"13");
// console.log(newurl)；

const querystring = require('querystring');

// ch->aaaaa
var qo = querystring.parse(urlObj.query);
qo.ch = "aaaaa";
var qs = querystring.stringify(qo);
urlObj.search = "?" + qs;
var xiugai = url.format(urlObj);
console.log(xiugai)

