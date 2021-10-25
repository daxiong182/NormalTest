//10个数 随机取走9个还剩1个取出


//方法 1
function fn1() {
    let arr = Array(10).fill(0).map((v, i) => i + 1)
    var randomArr = [];
    while (randomArr.length !== 9) {
        var n = Math.floor(Math.random() * 10 + 1);
        if (randomArr.indexOf(n) === -1) {
            randomArr.push(n)
            arr.splice(n - 1, 1, 0)
        }
    }
    return arr.filter(i => i)[0]
}


//方法 2
function fn2() {
    let arr = Array(10).fill(0);
    let randomArr = []
    while (randomArr.length !== 9) {
        var n = Math.floor(Math.random() * 10 + 1)
        if (randomArr.indexOf(n) === -1) {
            randomArr.push(n)
            arr[n - 1] = 1
        }
    }
    return arr.indexOf(0) + 1
}

//方法3

function fn3() {
    let arr = Array(10).fill(0).map((v, i) => i + 1);
    let total = arr.reduce((pre, cur) => {
        return pre + cur
    }, 0)
    var sum = 0
    var randomArr = []
    while (randomArr.length !== 9) {
        var n = Math.floor(Math.random() * 10 + 1)
        if (randomArr.indexOf(n) === -1) {
            randomArr.push(n)
            sum += n
        }
    }
    return total - sum
}