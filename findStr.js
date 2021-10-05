//查找字符串中出现次数最多的字符
const find = function(str) {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i)
        if (!obj[c]) {
            obj[c] = 1
        } else {
            obj[c]++
        }

    }
    //比较对象内属性值
    let c = str.charAt(0)
    max = obj[c]
    for (let key in obj) {
        if (key === c) continue
        if (max < obj[key]) {
            max = obj[key]
            c = key
        }
    }
    console.log(c, max);

}

find('hello')