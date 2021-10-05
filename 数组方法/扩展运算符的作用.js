/**
 * 扩展运算符的作用
 * 1.把伪数组转换为数组
 * 2.合并数组跟合并对象
 * 3.复制数组
 */



let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = [...arr1, arr2]

let arr4 = [1, 2, 3]

//相当于深拷贝 对象同理
let arr5 = [...arr4]

console.log(arr4.join('-'));


