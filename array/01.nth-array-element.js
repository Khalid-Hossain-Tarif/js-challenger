// Get nth element of array
// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

const nthArrayElementFinder = (a, n) => {
    return a[n - 1];
}

console.log(nthArrayElementFinder([1,2,3,4,5],3)); //3
console.log(nthArrayElementFinder([10,9,8,7,6],5)); //6

