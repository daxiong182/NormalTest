var obj = {
    _age: 20,

};


//1.将数据的特征改变 隐藏属性
Object.defineProperty(obj, '_name', {
    configurable: true, //是否可以被删除
    enumerable: true, //是否可以被枚举
    writable: true, //是否可以被修改
    value: '张三'
})



//2.给obj对象设置name访问器属性
Object.defineProperty(obj, 'name', {
    configurable: false,
    enumerable: true,
    set(value) {
        this._name = value
    },
    get() {
        return this._name
    }
})

console.log(Object.keys(obj));