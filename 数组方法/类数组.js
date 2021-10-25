//什么是类数组？
//1.1对象类型，key是类似于数组索引
//1.2 length

var obj = {
    "0": 'a',
    "1": 'b',
    "2": 'c',
    length: 3,
}

//2.常见的类数组
//arguments
function fn(a, b) {
    console.log(arguments);
    console.log(arguments instanceof Array);
}

//fn(1, 2)

//数组和类数组的区别 1.类数组是一个对象类型 
let b = Array.prototype.slice.call(obj, 0, 1) //call 和 applay 除了可以改变this指向 还可以用来改变方法执行主体 
console.log(b);

//类数组和数组的转换方法 Array.prototype.slice.call()  2.Array.from 可以将类数组的值 转换为数组值
var r3 = Array.from(obj)

//使用扩展运算符
var r4 = [...arguments]
console.log(r4);