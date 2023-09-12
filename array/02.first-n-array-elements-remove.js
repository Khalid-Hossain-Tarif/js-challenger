// Remove first n elements of an array
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

const firstNarrayElementRemove = (a) => {
    return a.splice(3);
}

console.log(firstNarrayElementRemove([1,2,3,4]));
console.log(firstNarrayElementRemove([5,4,3,2,1,0]));
console.log(firstNarrayElementRemove([99,1,1]));