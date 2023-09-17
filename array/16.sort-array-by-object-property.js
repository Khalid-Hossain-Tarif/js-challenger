// Sort array by object property
// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

const arraySortByObjectProperty = (arr) => {
    const sort = (x, y) => x.b - y.b;
    return arr.sort(sort);
}

//Another solution
// const arraySortByObjectProperty = (arr) => {
//     return arr.sort((first,last) => (first.b > last.b) ? 1 : -1);
// }

console.log(arraySortByObjectProperty([{a:1,b:2},{a:5,b:4}])); //[{a:1,b:2},{a:5,b:4}]
console.log(arraySortByObjectProperty([{a:2,b:10},{a:5,b:4}])); //[{a:5,b:4},{a:2,b:10}]
console.log(arraySortByObjectProperty([{a:1,b:7},{a:2,b:1}])); //[{a:2,b:1},{a:1,b:7}]