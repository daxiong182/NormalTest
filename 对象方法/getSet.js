const beauty = {
    name: '貂蝉',
    _waistline: 50
}

//ES5
Object.defineProperty(beauty, 'waistline', {
    //获取waistline自动触发
    get() {
        return this._waistline
    },
    //赋值waistline自动触发
    setInterval(newVal) {
        this._waistline = newVal
    }
})



//ES6
const beauty1 = {
    name: '王大拿',
    _wealth: 100000,
    _age: 45,
    get catchw() {
        return this._wealth - 99999
    },
    set catchw(val) {
        this._wealth = val
    }
}
console.log(beauty.waistline);
console.log(beauty1.catchw);