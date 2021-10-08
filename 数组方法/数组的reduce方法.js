//1.统计数组中每个元素出现的次数
/**
 * 使用key-value存储
 * key：数组中不重复的元素
 * value：元素出现的次数
 */
function keywordCount(arr) {
    let result = arr.reduce(function(pre, cur) {
        if (!pre[cur]) {
            pre[cur] = 1
        } else {
            pre[cur]++
        }
        return pre
    }, {})

    console.log(result);

}

arr = [1, 2, 3, 5, 9, 2, 2, 1]

// keywordCount(arr)

//2.数组求和

function sumCount(arr) {
    let result = arr.reduce((pre, cur) => pre += cur)
    console.log(result);
}

// sumCount(arr)