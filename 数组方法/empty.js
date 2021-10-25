var a = [1, 2, 3]

//console.log(a.length);

a.length = 5
    //console.log(a);

var b = Array(5)
let c = b.map((item, i) => i) //map 不会处理数组中的空元素 只能将数组直接赋值
    //console.log(c);

b.forEach(i => { //forEach 不会处理数组中的空元素
    console.log(i);
})


for (value of b) { //for循环可以输出对应空值为undefined
    //console.log(value);
}


console.log(a.indexOf(undefined)); //indexOf 不会查找undefined 不执行