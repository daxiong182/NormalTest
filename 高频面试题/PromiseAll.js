Promise._all = function(array) {

    return new Promise((resolve, reject) => {
        const result = []
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            array[i].then(data => {
                result[i] = data
                count++
                if (count === array.length) {
                    resolve(result)
                }
            }, reject)
        }
    })


}