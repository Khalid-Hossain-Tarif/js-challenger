// Get first n elements of an array
// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

const firstNarrayElements = (a) => {
    return a.slice(0, 3);
}

console.log(firstNarrayElements([1,2,3,4]));
console.log(firstNarrayElements([5,4,3,2,1,0]));
console.log(firstNarrayElements([99,1,1]));