obj = {
    address: 'China'
}

Object.defineProperties(obj, {
    name: {
        configurable: true, //是否可以被删除 默认是false
        writable: true, //是否可以被修改
        value: '张三'
    },
    age: {
        configurable: false, //否
        enumerable: true,
        set(val) {
            this.age = value
        },
        get() {
            if (this.age == 20) {
                return this.age + 1;
            } else {
                return this.age - 1;
            }
        }
    }
})



console.dir(obj)

console.log(Object.keys(obj));