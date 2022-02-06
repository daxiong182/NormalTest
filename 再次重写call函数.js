Function.prototype.myCall = function() {

    const args = Array.prototype.slice.call(arguments)

    //this的值
    const t = args.shift()
    t.fn = this

    const res = t.fn(...args)
    delete t.fn
    return res



}


function fn(a, b) {
    console.log('a', a);
    console.log('b', b);
    console.log('this', this);

    return 'hello'
}



const res = fn.call({ x: 10 }, 20, 30)


console.log('res', res);