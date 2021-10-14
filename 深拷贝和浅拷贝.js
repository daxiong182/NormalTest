let arr = [1, 2, 3]

//展开运算符实现是深拷贝
let arr1 = [...arr]

//JSON实现深拷贝
let arr2 = JSON.parse(JSON.stringify(arr))

//slice()截取
let arr3 = arr.slice()

//最原始的方法
let arr4 = []

for (let i = 0; i < arr.length; i++) {
    arr4[i] = arr[i]
}

arr4.push(4)

console.log(arr, arr4);