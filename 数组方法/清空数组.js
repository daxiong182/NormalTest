var a = [1, 2, 3, 4]

//splice 1:索引 2：长度 3...n:插入
function emptyArr(arr) {
    return arr.splice(0, arr.length)
}


//2. a=[] 覆盖

//3.length=0 将数组的长度变成0
a.length = 0
console.log(a);