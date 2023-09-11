// Get nth element of array
// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

const getNthElementOfArray = (a, n) => {
    return a.indexOf(n)
}

console.log(getNthElementOfArray([1,2,3,4,5],3);