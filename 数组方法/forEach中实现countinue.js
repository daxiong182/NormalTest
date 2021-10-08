//some方法实现continue

let arr = [1, 2, 3, 5, 9, 12, 34]

arr.some((cur, index) => {
    if (index === 2) {
        return
    }
    console.log(cur);
})