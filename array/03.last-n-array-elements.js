// Get last n elements of an array
// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

const lastNarrayElements = (a) => {
    return a.splice(-3);
}

console.log(lastNarrayElements([1,2,3,4])); //[2,3,4]
console.log(lastNarrayElements([5,4,3,2,1,0])); //[2,1,0]
console.log(lastNarrayElements([99,1,1])); //[99,1,1]