//1.判断一个变量是空对象
let obj = { name: '张三' }
let arr = []
let number = 0
    //判undefined 和null
if (obj === undefined || obj === null) {

}
//对象判空
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}

// console.log(isEmpty(obj));

//数组判空
arr instanceof Array && arr.length === 0

//3.字符串判空
str === '' || str.trim().length === 0

//4.数字判0或者NaN
    68n ;;;!(Number(number) && number) === true