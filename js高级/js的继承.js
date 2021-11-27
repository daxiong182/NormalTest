function Father(uname) {
    //this指向父构造函数的实例
    this.uname = uname

}




//2.子构造函数
function Son(uname, age) {
    //3.继承父类的属性 使用call()
    Father.call(this, uname);
    this.age = age;

}

Father.prototype.show = function() { //父类的原型方法 show()
    console.log('Father function');
}

let son = new Son('小明', 20)

//子类继承父类的原型
Son.prototype = new Father()
    //将子构造函数原型添加构造函数属性
Son.prototype.constructor = Son


son.show()

console.log(son);