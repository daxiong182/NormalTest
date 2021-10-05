/**
 * Array some() 查找数组中是否存在满足条件的元素 如果有 返回true 否则返回false
 */

let nums = [1, 5, 8, 3, 4, 13]

let flag = nums.some(item => item > 10)

console.log(flag);