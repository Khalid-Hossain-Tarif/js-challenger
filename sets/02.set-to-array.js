// Convert a Set to Array
// Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array

const setToArray = (set) => {
    return [...set]
    // return Array.from(set);
}

console.log(setToArray(new Set([1, 2, 3]))); //[1, 2, 3]
console.log(setToArray(new Set([123]))); //[123]
console.log(setToArray(new Set(['1', '2', '3']))); //['1', '2', '3']
console.log(setToArray(new Set('123'))); //['1', '2', '3']