/**
 * 
 * 1.使用instanceof运算符
 * 因为数组包含在Object类型中 所以要先从小范围 Array 类型开始判断
 */

var a = []
var obj = {}
    // console.log(a instanceof Array); //true

// console.log(a instanceof Object); //true

//console.log(obj instanceof Array); //false

function getDataType(o) {
    if (o instanceof Array) {
        return 'Array';
    } else if (o instanceof Object) {
        return 'Object';
    } else {
        return 'param is not object type'
    }
}

/**
 * 2.通过构造函数来判断一个变量是数组还是对象
 * x.constructor
 * 
 */

// console.log(a.constructor === Array);

// console.log(obj.constructor === Object);


/**
 * 3.toString [Object]
 * 
 */

console.log(Object.prototype.toString.call(a));

console.log(Object.prototype.toString.call(obj));