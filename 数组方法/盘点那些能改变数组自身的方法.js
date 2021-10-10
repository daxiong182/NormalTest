//1.splice(index,deleteHowmany,additems1,additems2,...additemsn)


//2.sort() 排序 默认转换成字符串 对字符串进行比较
let arr = [2, 34, 8, 9, 10, 4, 5, 7]
    // console.log(arr.sort((a, b) => a - b));


//3.pop() 删除数组中最后一个值


//4.shift() 删除数组的第一个元素


//5.push() 向数组末尾追加


//6.unshift() 向数组头部追加


//7.reserve() 翻转数组


//8.ES6 copyWithin(startposition,copystart,copyend) 复制元素到指定的位置

var arr2 = [10, 2, 6, 8, 12, 99, 4, 11, 55]
arr2.copyWithin(3, 4, 7)
    // console.log(arr2);

//9.fill(value,start,end) 填充数组

var arr3 = [10, 9, 8, 6]

arr3.fill(1, 0, 1)

console.log(arr3);