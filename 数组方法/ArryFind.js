/**
 * 数组的find方法 
 * 根据条件查找元素 如果找到了返回该元素 否则返回undefined 表示没有找到
 */

let nums = [10, 30, 20, 40]

let num = nums.find(item => item > 30)

console.log(num);

/**
 * 数组的findIndex方法
 * 根据条件查找元素 如果找到了返回该元素的下标 否则返回-1
 */

let index = nums.findIndex(item => item > 30)
console.log(index);