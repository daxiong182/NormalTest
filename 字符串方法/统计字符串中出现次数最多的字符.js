function getMaxCount(str) {

    var maxCount = 0;
    var maxCountChar = '';

    while (str) {
        var length = str.length;
        var char = str.charAt(0);
        var reg = new RegExp(char, 'g');
        str = str.replace(reg, '');
        var restLength = str.length;
        var charCount = length - restLength;
        if (charCount > maxCount) {
            maxCount = charCount
            maxCountChar = char
        }
    }
    return '出现次数最多的字符为：' + maxCountChar + '出现的次数为：' + maxCount

}

/** 
 * 
 *  *  
 *  * @param {借用数组方法对字符串进行排序利用lastindexOf计算次数} str
 *  *
 *  *
 * 
 * */
function getMaxCount2(str) {

    var maxCount = 0
    var maxCountChar = ''

    str = str.split('').sort().join('');
    for (let i = 0, j = str.length; i < j; i++) {
        var char = str.charAt(i);
        var charCount = str.lastIndexOf(char) - i + 1;
        if (charCount > maxCount) {
            maxCount = charCount
            maxCountChar = char
        }
        i = str.lastIndexOf(char)
    }

    return '出现次数最多的字符为：' + maxCountChar + '出现的次数为：' + maxCount

}

/**
 * 
 * @param {利用key-value的方式存储} str 
 * 
 */
function getMaxCount3(str) {
    var json = {}
    for (var i = 0; i < str.length; i++) {
        if (!json[str.charAt(i)]) {
            json[str.charAt(i)] = 1
        } else {
            json[str.charAt(i)]++
        }
    }
    //获取出现次数最多的字符
    var maxCountChar = ''
    var maxCount = 0
    for (var key in json) {
        if (json[key] > maxCount) {
            maxCount = json[key]
            maxCountChar = key
        }
    }
    return '出现次数最多的字符为：' + maxCountChar + '出现的次数为：' + maxCount

}