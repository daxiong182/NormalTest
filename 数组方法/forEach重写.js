let arr = [1, 2, 3, 4]

let obj = {}

let arr2 = [1000, 100, 10000]
arr.forEach(item => console.log(item))


console.log('-------------------------------------');

//重写
Array.prototype.forEach1 = function(fn) {
    //此处定义arr到底是个什么玩意
    var arr = this;
    var context = arguments[1]

    if (typeof fn === 'function') {
        for (var i = 0; i < arr.length; i++) {
            fn.apply(context, [arr[i], i, arr])
        }
    } else {
        throw new Error('参数必须是function')
    }
}

arr2.forEach1(item => console.log(item))