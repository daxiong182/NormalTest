//实现find

Object.defineProperty(Array.prototype, 'myFind', {
    value: function(fn) {
        if (this == null) {
            return new Error('this 不能为null')
        }
        var o = Object(this);
        //无符号位移 0 1.将不是数字类型的转换为数字类型 如果不能转换的话 就转换为0  2.将不是正数的值转换为正数
        var len = o.length >>> 0;
        if (typeof fn !== 'function') {
            return new Error('fn必须是函数');
        }
        var thisArgs = arguments[1]
        var k = 0;
        while (k < len) {
            var c = o[k]
            var result = fn.call(thisArgs, c, k, o);
            if (result) {
                return c
            }
            k++
        }
        return undefined
    }

})