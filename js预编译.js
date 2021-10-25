function fn(a, b) {
    console.log(a);
    var a = 123
    console.log(a);
    console.log(c);

    function a() {

    }

    if (false) {
        var d = 678
    }
    console.log(d);
    console.log(b);
    var b = function() {

    }

    console.log(b);

    function c() {

    }

    console.log(c);
}



fn(1, 2) //作用域分为函数作用域和全局作用域   在函数作用域的创建过程中会有js的变量对象 AO对象创建 供js引擎自己访问
    //函数作用域创建过程 1.创建AO对象 2.找形参和变量的申明 作为AO对象的属性名 值暂为undefined 3.实参和形参相统一 4.找函数申明 会覆盖变量的声明