//重复字符串

//使用递归实现重复输出字符串
function repeat1(target, n) {
    if (n === 1) {
        return target
    }
    [].concat([target], repeat1(target, n - 1)).join('')
}


//利用空数组分割方法实现重复输出字符串
function repeat2(target, n) {
    return Array(n + 1).join(target)
}



function repeat3(target, n) {
    return Array.prototype.join.call({ length: n + 1 }, target);
}