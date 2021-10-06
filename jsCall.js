let a = {
    fn(x) {
        console.log(this.n + this.s + x);
    }
}

var p = {
    n: '我是老尚,',
    s: '今年18，'
}

// a.fn.call(p, '大大熊在学习')

function fn1() {

    console.log(this, '1');
    this.say = function(n) {
        console.log(n);
    }
}

function fn2() {
    //别人的this指向变成fn2  fn2()进而可以使用继承来的方法 “fn2()的this还是它自己”
    fn1.call(this)
    console.log(this);
}


var _f = new fn2()

_f.say('我是大大熊')