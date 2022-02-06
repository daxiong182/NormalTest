const obj = {
    name: '杜兰特',
    team: '雷霆'
}

//冻结的对象 可读 不可修改 不可增加 不可删除
const o = Object.freeze(obj)
console.log(o);
console.log(o === obj);

o.name = '乔丹';


const obj2 = {
    name: '杜兰特',
    teram: '火箭'
}

//密封的对象 可读 可修改 不可增加 不可删除
const o2 = Object.seal(obj2)

o2.name = '科比'

console.log(o2);


