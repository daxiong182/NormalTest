function Obj(name, age) {
    this.name = name
    this.age = age
    this.say = function() {
        console.log('我的名字是：' + name);
    }
}

Obj.prototype.address = 'China'

var obj = new Obj('张三', 89)

//for in 方法 遍历对象的所有可枚举属性
for (let key in obj) {
    console.log(key, obj[key]);

}

//Object.keys(obj) 该方法返回的是对象所有'键'组成的数组
console.log(Object.keys(obj));

//Object.getOwnPropertyNames(obj) 该方法返回对象所有'键'组成的数组
console.log(Object.getOwnPropertyNames(obj));

//判断属性是否存在
console.log('name' in obj);

//删除对象的属性
delete obj.name
console.log(obj);