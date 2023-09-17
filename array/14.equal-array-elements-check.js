// Check if all array elements are equal
// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

const arrayElementsCompare = (arr) => {
    return new Set(arr).size === 1;
}

//Another solution
// const arrayElementsCompare = (arr) => {
//     return arr.every(el => el === arr[0]);
// }

console.log(arrayElementsCompare([true, true, true, true])); //true
console.log(arrayElementsCompare(['test', 'test', 'test'])); //true
console.log(arrayElementsCompare([1,1,1,2])); //false
console.log(arrayElementsCompare(['10',10,10,10])); //false