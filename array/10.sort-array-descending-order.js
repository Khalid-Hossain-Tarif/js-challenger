// Sort an array of numbers in descending order
// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

const arrayDescendingOrder = (arr) => {
    return arr.sort((a, b) => b - a);
}

console.log(arrayDescendingOrder([1,3,2])); //[3,2,1]
console.log(arrayDescendingOrder([4,2,-3,200])); //[200,4,2,-3]