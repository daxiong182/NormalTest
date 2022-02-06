var data = [{ value: '1,2' }, { value: '3' }, { value: '4,5' }];

var res = data.reduce((prev, cur) => {

    // return [...prev, ...cur.value.split(',')]

    return [
        ...Object.values(prev).join(),
        ...Object.values(cur).join(),

    ]



})