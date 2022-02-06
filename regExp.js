console.log(/(abd)(a)/g.exec("abdabcabc"));

console.log(/(?:abd)(a)/g.exec('abdabcaad')); //?: 不匹配指定分组

console.log(/(abd)(?=a)(a)/g.exec('abdabcaad')); // 正向预查 也叫环视 一组不合格 全部不匹配