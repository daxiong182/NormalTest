/**
 * 
 * @param {字符串去重的核心思想是定义一个中转变量} str 
 * @returns 
 */
//方法一：
function removeDuplicateChar(str) {
    var result = ''
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (result.indexOf(char) < 0) {
            result += char;
        }
    }
    return result
}


//方法二：
function removeDuplicateChar2(str) {
    var result = [];
    var json = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i]
        if (!json[char]) {
            result.push(char)
            json[char] = true;
        }
    }
    return result.join('')
}