function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.say = function() {
    console.log(this.name + '正在奔跑');
}

var p1 = new Person('张三');

p1.say()