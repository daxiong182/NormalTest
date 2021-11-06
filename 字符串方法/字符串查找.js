function getMaxCount(strings) {

    var maxCount = 0
    var maxCountChar = ''

    while (strings) {
        let length = strings.length
        let char = strings.charAt(0)
        let reg = new RegExp(char, 'g')
        let strings = reg.replace(reg, '')
        let charCount = length - strings.length
        if (charCount > maxCount) {
            maxCount = charCount
            maxCountChar = char
        }
    }
    return "出现次数最多的字符为：" + char + '出现的次数为：' + maxCount

}


function getMaxString(str) {
    const map = [...str].reduce((sum, item) => {
        sum[item] = sum[item] ? sum[item] + 1 : 1
        return sum
    }, {})
    return Object.entries(map).sort((x, y) => y[1] - x[1])
}

strs = 'hello'

console.log(getMaxString(strs));