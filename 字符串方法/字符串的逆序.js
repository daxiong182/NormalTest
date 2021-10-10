/**
 * 
 * @param {借助数组方法实现} str 
 * @returns 
 */
function reverseStr(str) {
    return str.split("").reverse().join('')
}

/**
 * @param {使用字符串的charAt方法} str 
 */
function reverseStr2(str) {
    var result = ''
    for (var i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i)
    }
    return result;
}

/**
 * 
 * @param {传入字符串} strIn 
 * @param {传入字符串长度} pos
 * @param {结果值，默认为空字符} strOut 
 * 
 */
function reverseStr3(strIn, pos, strOut) {

    if (pos < 0) {
        return strOut
    }
    strOut += strIn.charAt(pos)
    pos--
    return reverseStr3(strIn, pos, strOut)
}