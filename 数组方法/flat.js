const beauty = ['1', ['3', '4'], '7', '100', [3, 4, 22, [77, 1]]]

const result = beauty.flat()

console.log(result);


//手写实现flat
Array.prototype._flat = function(depth = 1) {

    return flatten(this, depth >= 1 ? depth : 1)

    function flatten(arr, depth) {
        //递归的结束表示，返回一个拷贝新的数组实例
        if (depth <= 0) return [...arr]
        return arr.reduce((accu, item) => {
            if (Array.isArray(item)) { //item是数组 递归处理
                accu.push(...flatten(item, depth - 1))
            } else {
                accu.push(item)
            }
            return accu
        }, [])

    }


}