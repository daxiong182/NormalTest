obj = {
    name: '张三',
    age: 28
}

//查看对象指定属性值
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

//查看对象所有属性值
console.log(Object.getOwnPropertyDescriptors(obj));


//除了可以查看我们自定义的对象属性 也可以查看系统提供的一些对象属性
let arr = new Array(3);
arr[1] = 1
arr[0] = 0

console.log(Object.getOwnPropertyDescriptors(arr));