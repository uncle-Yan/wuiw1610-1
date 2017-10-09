var EventEmitter = require('events');
var util = require('util');
function person(name,age) {
    this.name = name;
    this.age = age;
}
util.inherits(person,EventEmitter);
var xh = new person('小红',18);

xh.setMaxListeners(0)

xh.addListener('say',function(){
    console.log("我叫"+this.name+";今年"+this.age);
})

function aa() {
    console.log(this.name);
}
xh.addListener('say',aa);

// 移除某一事件的某一处理函数
// xh.removeListener('say',aa);

xh.addListener('say',function(){
    console.log(this.age);
})

// 移除所有
// xh.removeAllListeners();

xh.on('change',function () {
    this.name = "张三"
})

xh.emit('change');
xh.emit('say');

console.log(xh.listeners('say'))
console.log(xh.listeners('say')[0])

console.log(xh.listenerCount('say'))