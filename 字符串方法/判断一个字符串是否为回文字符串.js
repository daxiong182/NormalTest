//判断一个字符串是否为回文字符串

function circleStr(str) {
    if (str.length <= 1) return true;
    str = str.toLowerCase()
    let startValue = str[0]
    let endValue = str[str.length - 1]
    if (startValue === endValue) {
        return circleStr(str.slice(1, str.length - 1))
    } else {
        return false
    }

}


/**
 * 方法2 将字符串进行逆序处理
 */



function circleStr2(str) {
    if (str.length <= 1) return true;
    str = str.toLowerCase()
    var reverseStr = str.split('').reverse().join('');
    return str === reverseStr
}