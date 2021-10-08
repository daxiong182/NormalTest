//字符串调用map方法

var str = 'hello javascript';

var fn = function(currentValue) {
    return currentValue.charCodeAt(0)
}

console.log(
    Array.prototype.map.call(str, fn)
);


