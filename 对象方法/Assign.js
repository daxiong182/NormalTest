/**
 * Object.assign(target,source1,source2,...args)
 * 合并对象
 */


let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    c: 3,
    d: 4
}

Object.assign(obj1, obj2)

console.log(obj1);