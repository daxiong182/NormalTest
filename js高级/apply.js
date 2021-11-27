//apply()/call()方法的作用是 指定一个对象来执行函数 apply(,[]) 注：apply 以数组的形式传参

var obj = {
    name: '张三'
};

var fun1 = function(a, b) {
    console.log(a + b);
    console.log(this);
}


fun1.apply(obj, [1, 2])