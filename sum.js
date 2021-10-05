//统计网页中各种标签出现了多少次
const nodeList = document.querySelectorAll("*");

let ret = [...nodeList].reduce((sum, tag) => {

    sum[tag.nodeName] = ++sum[tag.nodeName] || 1
    return sum

}, {})

ret = Object.entries(ret).sort(([, v1], [, v2]) => v2 - v1)

ret.slice(0, 3).reduce((sum, obj) => {
    let [key, value] = obj
    sum[key] = value
    return sum
}, {})