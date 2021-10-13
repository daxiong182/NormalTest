Function.prototype.newBind = function(context) {
    let that = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var bindArgs = Array.prototype.slice.call(arguments) //获取函数自带的arguments
        that.apply(context, args.concat(bindArgs))
    }
}




var _obj = {
    name: '我是大大熊'
}


function fn1() {
    console.log(this.name);
}

var _f = fn1.newBind(_obj)
_f()