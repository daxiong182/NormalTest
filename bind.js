function fn1() {
    console.log(this.name + '----------' + this.age);
}


var _obj = {
    name: '大熊',
    age: 21
}


o = {}

//区别 bind 返回的是一个改变this指向的函数
o.fn1 = fn1.bind(_obj)

console.log(o.fn1);