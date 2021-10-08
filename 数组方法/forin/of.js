//1.遍历对象
function Foo() {
    this.name = 'kingx';
    this.age = 20
}

Foo.prototype.getName = function() {
    return this.name
}
var foo = new Foo()
    //for...in 循环会遍历原型链上的属性
for (var inkey in foo) {
    if (foo.hasOwnProperty(inkey)) {
        console.log(inkey);
    }

}

// for (var ofkey in foo) {
//     //会报错 for...of 只能遍历具有 iterator 接口的数据 例如 Array Map Set 
// }

arr = [1, 2, 3, 5, 6, 7]

for (let arrOfKey of arr) {
    console.log(arrOfKey);
}




