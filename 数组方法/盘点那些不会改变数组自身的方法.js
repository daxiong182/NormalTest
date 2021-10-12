//1.concat 链接两个或多个数组参数

var arr1 = []
var r1 = arr1.concat(1, 'abc', ['acd', 'acsd'])
console.log(r1);

//2.join() 把数组拆分成字符串 
var arr2 = ['one', 'two', 'three']
let arr3 = arr2.join();
console.log(arr3);

//3.slice() 截取指定长度的数组并返回截取到的数组

let arr4 = ['1', '4', '9', '3']
let arr5 = arr4.slice(0, 1)
console.log(arr5);

//4.toString() 把数组转换为字符串

let arr6 = ['3', '2', 1, new Date()]
let str = arr6.toString()
console.log(str);

//5.toLocalString() 会把时间本地化

let str2 = arr6.toLocaleString()
console.log(str2);

//6.indexOf(value,startPosition) 数组中某元素第一次出现的位置

let arr7 = ['1', '10', '9']
let index = arr7.indexOf('10')
console.log(index);

//7.lastIndexOf(value,fromPosition) 数组中某元素最后一次出现的位置

let arr8 = ['1', '10', '8', '1', '9']
let indexEnd = arr8.lastIndexOf('1', 3)
console.log(indexEnd);

//8.includes 判断数组中是否包含特定的元素

var arr9 = [1, 2, 3, 9, 4, 6]
let flag = arr9.includes(3)
console.log(flag);