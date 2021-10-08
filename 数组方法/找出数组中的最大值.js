//reduce方法

//计算数组中的较小值
Array.prototype.min = function() {

    return this.reduce((pre, cur) => result = pre > cur ? cur : pre)

}

//计算数组中的较大值
Array.prototype.max = function() {

    return this.reduce((pre, cur) => result = pre > cur ? pre : cur)

}



let arr = [10, 20, 40, 2, 99]

//或者
Math.min(...arr)

Math.max(...arr)