// Remove first n elements of an array
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

const lastNarrayElements = (a) => {
    return a.splice(-3);
}

console.log(lastNarrayElements([1,2,3,4]));
console.log(lastNarrayElements([5,4,3,2,1,0]));
console.log(lastNarrayElements([99,1,1]));