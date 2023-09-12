// Get first n elements of an array
// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

const lastNarrayElements = (a, n) => {
    return a.slice(-n);
}

console.log(lastNarrayElements([1,2,3,4,5], 2));
console.log(lastNarrayElements([1, 2, 3], 6));
console.log(lastNarrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3));