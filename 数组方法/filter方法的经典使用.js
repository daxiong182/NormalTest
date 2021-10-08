//数组去重
let arr = [1, 2, , 5, 9, 3, 2, 1, 9]

arr.filter((current, index, selfl) => {
    var newIndex = selfl.indexOf(current)
    return newIndex === index

})

//过滤数组中的素数值
let isPrime = function(number) {
    if (number === 2) {
        return true;
    }
    var square = Math.sqrt(number);
    for (var i = 2; i <= square; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

let arrs = []
for (var j = 2; j <= 10000; j++) {
    arrs.push(j)
}

console.log(arrs.filter(isPrime).length);