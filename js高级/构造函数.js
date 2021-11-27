function Person(name, age) {
    this.name = name
    this.age = age
    this.run = function() {
        console.log(this.name + ' 正在蹦跑');
    }
}


var p1 = new Person('张三', 20);

var p2 = new Person('李四', 30);


//构造函数的静态成员:直接定义在构造函数中的成员 只能通过构造函数本身才能访问
Person.gender = '男' //直接通过构造函数指定一个属性

//构造函数的静态成员和实例成员就类似于java中的实例成员和静态成员
console.log(Person.gender);