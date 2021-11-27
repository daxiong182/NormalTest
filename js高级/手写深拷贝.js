function deeCopy(newObj, oldObj) {

    for (var k in oldObj) {

        var item = oldObj[k];

        if (item instanceof Array) {
            newObj[k] = [];
            deeCopy(newObj[k], item)
        } else if (item instanceof Object) {
            newObj[k] = {}
            deeCopy(newObj[k], item)
        } else {
            newObj[k] = item;
        }

    }


}


// 或者 newObj=JSON.parse(JSON.stringify(oldObj))