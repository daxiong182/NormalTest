let q1 = fn => {
    setTimeout(() => {
        fn(1)
    }, Math.random() * 1000)
}

let q2 = fn => {
    setTimeout(() => {
        fn(2)
    }, Math.random() * 1000)
}

let q3 = fn => {
    setTimeout(() => {
        fn(3)
    }, Math.random() * 1000)
}


/**
 * 
 * 解决异步的方法
 * 1.Promise
 * 2.生成器函数
 * 3.Async+Await  异步函数内的异步等待
 * 
 */


let run = async(q) => {
    //补充实现逻辑代码
    for (let i = 0; i < q.length; i++) {
        const n = await new Promise((resolve) => {
            q[i](v => {
                resolve(v)
            })
        })
        console.log(n);
    }

}

run([q1, q2, q3])