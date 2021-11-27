// class类 不能提升
// calss 只能通过new 实例
// class 是采用严格模式的

class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log('Hi')
    }

    static eat() {
        console.log('eat')
    }


}