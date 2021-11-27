var arr = [1, 2, 3, 5]

//map() 对数组中的元素进行处理 返回一个新数组
var newarr = arr.map((value, index) => {
    return value + 10
})

console.log(newarr);


//filter() 当判断条件成立时返回

var newarr2 = arr.filter(item => item > 3)

console.log(newarr2);


//some()  有一个满足条件即可
arr2 = [100, 90, 60, 50, 200]

var b = arr2.some(item => {
    return item > 100
})

console.log(b);


//every() 所有元素满足条件才可以返回true 否则返回false
var c = arr2.every(item => {
    return item > 50
})

console.log(c);

arr3 = ['apple', 'banana']

//find() 查找数组中符合要求的元素 如果找到就返回该元素 并停止查找

var d = arr3.find(item => {
    if (item.length > 5) {
        return true
    }
})

console.log(d);

//数组的reduce方法

arr4 = [1, 2, 3, 4, 5, 6, 7, 8]

var sum = arr4.reduce((total, value) => {
    return total + value
}, 0)

console.log(sum);