const crypto = require('crypto');

// md5加密过程：
// var pass = "admin";
// var md5 = crypto.createHash("md5");
// md5.update(pass);
// console.log(md5.digest('hex'));

//sha1加密
// var pass = "66666";
// var sha1 = crypto.createHash('sha1');
// sha1.update(pass);
// console.log(sha1.digest('hex'));

// Hmac加密：
var pass = "admin";
var hmac = crypto.createHmac('sha1',"uncle");
hmac.update(pass);
console.log(hmac.digest('hex'));

var hmac = crypto.createHmac('sha1',"a");
hmac.update(pass);
console.log(hmac.digest('hex'));

