function delayLog(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item)
        }, 1000)
    })
}



async function processArr(arr) {
    // arr.forEach(element => {
    //     console.log(await delayLog(element))
    // })
    for (item of arr) {
        console.log(await delayLog(item));
    }
    console.log('打印完毕')
}

processArr([1, 2, 3])