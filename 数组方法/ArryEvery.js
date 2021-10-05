/**
 * every方法用来检测数组中所有的元素 是否都满足条件 如果都满足返回true 否则返回false
 * 特点：找到一个不满足条件的立即 返回最后的结果
 * 
 */

let nums = [18, 20, 9, 5]

let r = nums.every(item => item > 10)

console.log(r);