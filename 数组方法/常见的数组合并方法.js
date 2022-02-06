let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

// const result = arr1.push(arr2)

// let arr3 = arr1.flat()

// console.log(arr3)


arr1.push.apply(arr1, arr2);
console.log(arr1);

let arr = new Array();

console.log(arr);