//数组的sort方法 如果我们不给sort传参 默认是按照字符串的ASCII值进行排序的 即从A-Z

const names = ['Durant', 'Curry', 'Bulter', 'Kobe', 'Jordan']

const names_zh = ['杜兰特', '库里', '巴雷特', '乔丹']

const nums = [45, 333, 17, 56, 0]
const girls = [{
        name: '王昭君',
        height: 170
    },
    {
        name: '貂蝉',
        height: 172
    },
    {
        name: '西施',
        height: 168
    }
]

//第一种 先排好再反转
//console.log(names.sort().reverse());


console.log(names.sort((a, b) => b - a));


//3.排序中文 -->根据拼音字母的顺序进行排序 localeCompare
console.log(names_zh.sort((name1, name2) => name1.localeCompare(name2)));


console.log(girls.sort((a, b) => a.height - b.height));